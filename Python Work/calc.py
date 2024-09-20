import pandas as pd

# Read data from an Excel file
df = pd.read_excel('financial_data.xlsx')

# Clean data
df.dropna(inplace=True)  # Remove missing values

# Perform analysis (e.g., calculate total revenue)
total_revenue = df['Revenue'].sum()

# Generate a summary report
summary = f"Total Revenue: ${total_revenue:,.2f}"
with open('summary_report.txt', 'w') as file:
    file.write(summary)

print("Report generated successfully!")
