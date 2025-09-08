#!/usr/bin/env python3
"""
Transaction formatter tool for VFX documentation.

Fetches transaction data from the VerifiedX API and formats it as markdown
with properly escaped JSON for documentation purposes.
"""

import json
import sys
import requests
import argparse
from typing import Dict, Any, Optional


def fetch_transaction_data(tx_hash: str) -> Optional[Dict[str, Any]]:
    """
    Fetch transaction data from the VerifiedX API.
    
    Args:
        tx_hash: The transaction hash to fetch
        
    Returns:
        Transaction data dictionary or None if failed
    """
    url = f"https://data.verifiedx.io/api/transaction/{tx_hash}"
    
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching transaction data: {e}", file=sys.stderr)
        return None
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON response: {e}", file=sys.stderr)
        return None


def format_transaction_markdown(tx_hash: str, tx_data: Dict[str, Any]) -> str:
    """
    Format transaction data as markdown documentation.
    
    Args:
        tx_hash: The transaction hash
        tx_data: The transaction data from API
        
    Returns:
        Formatted markdown string
    """
    # Extract and parse the data field (it comes as a JSON string)
    data_field = tx_data.get("data")
    parsed_data = None
    tx_type = "INSERT TX TYPE"  # Manual placeholder
    
    if data_field:
        try:
            # Parse the JSON string
            parsed_data = json.loads(data_field)
        except json.JSONDecodeError as e:
            print(f"Warning: Could not parse data field as JSON: {e}", file=sys.stderr)
            parsed_data = data_field  # Use raw string if parsing fails
    
    # Format the data as properly indented JSON
    json_data = json.dumps(parsed_data, indent=2, ensure_ascii=False) if parsed_data is not None else "null"
    
    # Create the markdown output
    markdown = f"""### {tx_type}

**Transaction Hash:** `{tx_hash}`

**Spyglass URL:** https://spyglass.verifiedx.io/transaction/{tx_hash}

**Transaction Data:**
```json
{json_data}
```"""
    
    return markdown


def main():
    """Main function to handle command line arguments and execute the tool."""
    parser = argparse.ArgumentParser(
        description="Fetch and format VFX transaction data for documentation"
    )
    parser.add_argument(
        "tx_hash",
        help="Transaction hash to fetch and format"
    )
    parser.add_argument(
        "-o", "--output",
        help="Output file (default: stdout)"
    )
    
    args = parser.parse_args()
    
    # Fetch transaction data
    print(f"Fetching transaction data for {args.tx_hash}...", file=sys.stderr)
    tx_data = fetch_transaction_data(args.tx_hash)
    
    if tx_data is None:
        print("Failed to fetch transaction data", file=sys.stderr)
        sys.exit(1)
    
    # Check if data field exists
    if "data" not in tx_data:
        print("Warning: No 'data' field found in transaction response", file=sys.stderr)
        tx_data["data"] = None
    
    # Format as markdown
    markdown_output = format_transaction_markdown(args.tx_hash, tx_data)
    
    # Output to file or stdout
    if args.output:
        try:
            with open(args.output, 'w', encoding='utf-8') as f:
                f.write(markdown_output)
            print(f"Output written to {args.output}", file=sys.stderr)
        except IOError as e:
            print(f"Error writing to file: {e}", file=sys.stderr)
            sys.exit(1)
    else:
        print(markdown_output)


if __name__ == "__main__":
    main()