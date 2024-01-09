# Python Date Sorter

## Built for csv sorting of currently sales data but could be reformatted for other data types.

### Usage:
1. Clone repo
2. Run `cd Accendero-Projects/Python-Date-Sorter` from the command line
3. Run `python3 main.py` 

### Installation

For the Supabase py csv to sql py file
1. on Supabase, in the SQL Editor write a sql query to create a new table for acceptence of the incoming report with: id serial primary key, model_type varchar(255), and report text. 
2. Then go to your project settings on supabase and grab your api keys both the Project URL and the Project Api key aka anon public key
3. at the project root add a ,env file and add the keys you jsut grabbed from your supabase dashboard.
4. Now just run `python3 supabaseCSVToSql.py` refer to the https://supabase.com/docs under python in you run into any trouble running this one

You can also run it from your IDE of choice.

### Notes:
- Currently, set to print a sales report for each month in the csv data given. Sorts all the sales data for each csv file gives you the highest and lowest sales date for each model, or even whatever you have there in your csv file.
- The csv files are included in this repo. But you can use your own csv files as long as they are formatted the same way.
- This project was built form the original java project and both have the same functionality. The java project is a bit more robust and has more features. But this python project is a bit more simple and easier to use.

### Future Updates:
- Adding more features
- Add more error handling
- Add tests via pytest
- Add more documentation
- Adding a website that uses the data from the supabaseCsvToSql py file to display the data in a more user-friendly way.

### Built With:
- Python
- Lambda Functions
- Supabase
- Postgres

## Resources:
- [Supabase](https://supabase.io/)
- [Postgres](https://www.postgresql.org/)
- [Python](https://www.python.org/)
- [Lambda Functions](https://docs.python.org/3/library/ast.html#ast.Lambda)
- [CSV](https://docs.python.org/3/library/csv.html)
