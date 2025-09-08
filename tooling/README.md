# VFX Documentation Tooling

This directory contains tools to help with VFX documentation generation and maintenance.

## Transaction Formatter

The `format_transaction.py` script fetches transaction data from the VerifiedX API and formats it as markdown for documentation purposes.

### Installation

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

### Usage

#### Basic usage (output to stdout):
```bash
python format_transaction.py <transaction_hash>
```

#### Save to file:
```bash
python format_transaction.py <transaction_hash> -o output.md
```

#### Examples:
```bash
# Format a mint transaction
python format_transaction.py 46b0e70e963aad1f4344c811169bed8f0378541355bc48a751f4bd882342e86f

# Format a transfer transaction and save to file
python format_transaction.py 6ebcd32f0b6bd020f8ca3cd930dcc79cd38fbfd5b7c8ea8458306f8a1964d29f -o transfer_example.md
```

### Features

- Automatically detects transaction type (Mint, Transfer, etc.) from the data
- Fetches data from `https://data.verifiedx.io/api/transaction/`
- Properly escapes and formats JSON data
- Generates markdown with transaction hash, Spyglass URL, and formatted data
- Error handling for network issues and malformed responses
- Output to file or stdout

### Output Format

The tool generates markdown in this format:

```markdown
## Smart Contract Mint

**Transaction Hash:** `46b0e70e963aad1f4344c811169bed8f0378541355bc48a751f4bd882342e86f`

**Spyglass URL:** https://spyglass.verifiedx.io/transaction/46b0e70e963aad1f4344c811169bed8f0378541355bc48a751f4bd882342e86f

**Transaction Data:**
```json
[{
  "Function": "Mint()",
  "ContractUID": "edb8e3640dd54b09976c9c0d2e24d84f:1684697415",
  "Data": "...",
  "MD5List": "..."
}]
```

This matches the format used in the main documentation files.