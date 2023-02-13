#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

void printNumberArray(size_t arrayInput[], size_t n) {

    std::cout << "[ ";

    for (size_t i = 0; i < (n - 1); i++) {
        std::cout << arrayInput[i] << ", ";
    }

    std::cout << arrayInput[n - 1] << " ]";
}

void printStringArray(string arrayInput[], size_t n) {
    std::cout << "[ ";

    for (size_t i = 0; i < (n - 1); i++) {
        std::cout << arrayInput[i] << ", ";
    }

    std::cout << arrayInput[n - 1] << " ]";
}

void readFromFile(const string &fileName) {
    std::vector<int> numbers;
    ifstream inputFile(fileName);        // Input file stream object

    // Check if exists and then open the file.
    if (inputFile.fail()) {
        cout << "File reading Error!";
        cout << endl;

        _exit(0);
    }
    if (inputFile.good()) {
        // Push items into a vector
        int current_number = 0;
        while (inputFile >> current_number) {
            numbers.push_back(current_number);
        }

        // Close the file.
        inputFile.close();

        // Display the numbers read:
        cout << "The numbers are: ";
        for (int number: numbers) {
            cout << number << " ";
        }

        cout << endl;
    } else {
        cout << "File not good!";
        _exit(0);
    }
}

void readFromFile2() {
    fstream newfile;

    newfile.open("input.txt", ios::in); //open a file to perform read operation using file object
    if (newfile.is_open()) { //checking whether the file is open
        string tp;
        while (getline(newfile, tp)) { //read data from file object and put it into string.
            cout << tp << "\n"; //print the data of the string
        }
        newfile.close(); //close the file object.
    }
}


int main() {

//    size_t array[] = {1, 2, 3, 4, 5, 6};
//    size_t n = sizeof(array) / sizeof(size_t);
//
//    printNumberArray(array, n);
//    cout << endl;
//
//    string strArray[] = {"ASD", "ASD2", "ASD3", "ASD4", "ASD5"};
//    size_t n2 = sizeof(strArray) / sizeof(strArray[0]);
//
//    printStringArray(strArray, n2);
//    cout << endl;

    readFromFile("input.txt");
    cout << endl;
    readFromFile2();
    cout << endl;
    return 0;
}

