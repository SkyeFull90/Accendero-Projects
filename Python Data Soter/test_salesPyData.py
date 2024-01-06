import unittest
from unittest.mock import patch, mock_open

from datetime import datetime
from salesPyData import TeslaSales, FileService


class TestTeslaSales(unittest.TestCase):
    def test_init(self):
        tesla_sales = TeslaSales('Jan-21', '1000')
        self.assertEqual(tesla_sales.date, datetime.strptime('Jan-21', '%b-%y'))
        self.assertEqual(tesla_sales.sales, 1000)

    def test_from_csv_row(self):
        tesla_sales = TeslaSales.from_csv_row(['Jan-21', '1000'])
        self.assertEqual(tesla_sales.date, datetime.strptime('Jan-21', '%b-%y'))
        self.assertEqual(tesla_sales.sales, 1000)


class TestFileService(unittest.TestCase):
    @patch('builtins.open', new_callable=mock_open, read_data='date,sales\nJan-21,1000\nFeb-21,2000')
    def test_load_sales(self, mock_file):
        sales_data = FileService.load_sales('filename')
        self.assertEqual(len(sales_data), 2)
        self.assertEqual(sales_data[0].date, datetime.strptime('Jan-21', '%b-%y'))
        self.assertEqual(sales_data[0].sales, 1000)
        self.assertEqual(sales_data[1].date, datetime.strptime('Feb-21', '%b-%y'))
        self.assertEqual(sales_data[1].sales, 2000)


if __name__ == '__main__':
    unittest.main()
