import pytest
from salesPyData import FileService, TeslaSales, load_sales_report
from io import StringIO
import sys
import contextlib


# Fixture for FileService
@pytest.fixture
def file_service():
    return FileService()


# Test for load_sales method
def test_load_sales(file_service):
    sales_data = file_service.load_sales('test_sales.csv')
    assert len(sales_data) == 2
    assert sales_data[0].date.year == 2020
    assert sales_data[0].sales == 100
    assert sales_data[1].date.year == 2021
    assert sales_data[1].sales == 200


# Test for load_sales_report function
def test_load_sales_report(file_service):
    sales_data = file_service.load_sales('test_sales.csv')
    expected_output = (
        "Model 3 Annual Sales Report\n"
        "----------------------------\n"
        "2020 -> 100\n"
        "2021 -> 200\n"
        "\n"
        "The most profitable month for Model 3 was: Jan-21\n"
        "The least profitable month for Model 3 was: Jan-20\n"
        "\n"
    )
    with contextlib.redirect_stdout(StringIO()) as f:
        load_sales_report(sales_data, "Model 3")
    assert f.getvalue() == expected_output
