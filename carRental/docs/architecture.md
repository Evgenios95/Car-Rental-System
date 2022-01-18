# Folder structure

-As stated in our report, the file structure of our project could be found under this file. \
-This file was initially badly written on a word document, but decided to write it in MarkDown instead.

**_components_**: The components folder includes the files that are reused throughout the application. \
\
**_pages_**: Under the pages folder are the components that are complete pages. These complete page files have a Page suffix. Every folder that includes a page also contains the components that are used only in this page and nowhere else. Splitting big components to smaller ones, helps the code to be cleaner, and more mainainable.

- **Private** folders can be seen under pages. Private folders include components that are not reusable throughout the application, but only in this specific page. This is done so that we can keep the components small, consistent and more readable

\
 **_utils_**: This folder contains the utilities for our application. In this case it includes some constants, that we use in our application instead of string literals, and also functions. These functions can either be reusable functions that we use in many places, authentication functions and last, parse-functions, that include the functions that talk to our Database. We wanted to make the components and the pages as plain as possible and thus, we extracted the logic from them. \
 \
 **_css-variables_**: CSS variables that are used for our application are included here. Using CSS-Variables gives reusability and consistency. Most of them are the ones that can be seen in our Design System on Figma. Also same names.

```
📦src
┣ 📂components
┃ ┣ 📂Button
┃ ┃ ┣ 📜Button.css
┃ ┃ ┗ 📜Button.jsx
┃ ┣ 📂LabeledInput
┃ ┃ ┣ 📜LabeledInput.css
┃ ┃ ┗ 📜LabeledInput.jsx
┃ ┣ 📂DropDowns
┃ ┃ ┣ 📜DropDowns.css
┃ ┃ ┣ 📜DropDownEdit.jsx
┃ ┃ ┗ 📜DropDownWalkin.jsx
┃ ┣ 📂Layout
┃ ┃ ┣ 📜GrayColumn.jsx
┃ ┃ ┣ 📜GrayContainer.jsx
┃ ┃ ┗ 📜Layout.css
┃ ┣ 📂NavBar
┃ ┃ ┣ 📜NavBar.css
┃ ┃ ┗ 📜Navbar.jsx
┃ ┣ ..................
┣ 📂css-variables
┃ ┣ 📜all-variables.css
┃ ┣ 📜colors.css
┃ ┣ 📜fonts.css
┃ ┣ 📜rest.css
┃ ┗ 📜text-composita.css
┣ 📂pages
┃ ┣ 📂Book
┃ ┃ ┣ 📂private
┃ ┃ ┃ ┣ 📜PickUpCar.jsx
┃ ┃ ┃ ┣ 📜CustomerInfo.jsx
┃ ┃ ┃ ┗ 📜ReturnCar.jsx
┃ ┃ ┣ 📜BookPage.css
┃ ┃ ┗ 📜BookPage.jsx
┃ ┣ 📂Edit
┃ ┃ ┣ 📂EditBooking
┃ ┃ ┃ ┣ 📜EditBookingPage.css
┃ ┃ ┃ ┗ 📜EditBookingPage.jsx
┃ ┃ ┣ 📂EditCar
┃ ┃ ┃ ┣ 📜EditCarPage.css
┃ ┃ ┃ ┣ 📜EditCarPage.jsx
┃ ┃ ┃ ┣ 📂private
┃ ┃ ┃ ┃  ┣ 📜ChosenCarTable.jsx
┃ ┃ ┃ ┃  ┗ 📜EditCarTable.jsx
┃ ┃ ┗ 📂EditCustomer
┃ ┃ ┃ ┣ 📜EditCustomerPage.css
┃ ┃ ┃ ┗ 📜EditCustomerPage.jsx
┃ ┣ ..................
┣ 📂utils
┃ ┣ 📂auth
┃ ┃ ┗ 📜AuthWrapper.jsx
┃ ┣ 📂constants
┃ ┃ ┣ 📜general-labels.js
┃ ┃ ┗ 📜parse-labels.js
┃ ┣ 📂functions
┃ ┃ ┣ 📜handleFilteredBookings.js
┃ ┃ ┗ 📜onChangeHandlers.js
┃ ┗ 📂parse-functions
┃ ┃ ┣ 📜bookingComponentFunctions.js
┃ ┃ ┣ 📜bookingTableFunctions.js
┃ ┃ ┣ 📜individualBookingFunctions.js
┃ ┃ ┣ 📜loginFunction.js
┃ ┃ ┣ ..................
┣ 📜App.css
┣ 📜App.js
┗ 📜index.js
```
