```markdown
# 9ty Delight - Restaurant Website

## Project Overview

This project is a modern, responsive dummy website for "9ty Delight," a fictional restaurant. It aims to showcase a restaurant's ambiance, menu, team, and provide functionalities for online reservations and customer inquiries. The website is designed to be user-friendly, aesthetically pleasing, and fully adaptable across various devices.

## Features

The 9ty Delight website includes a wide range of features designed to enhance the user experience and provide comprehensive information about the restaurant:

*   **Sticky Navigation Bar:** A fixed header with navigation links (`Home`, `About`, `Menu`, `Team`, `Contact`) that stays visible at the top of the page as the user scrolls.
*   **Active Link Highlighting:** As the user scrolls through different sections of the page, the corresponding navigation link in the header dynamically changes its color to "gold" to indicate the active section.
*   **Smooth Scroll on Navigation Click:** Clicking on a navigation link smoothly scrolls the page to the target section, with an adjusted offset to account for the fixed header, ensuring content is not hidden behind it.
*   **Hero Section:** A captivating introductory section welcoming visitors to "9ty Delight" with a call to action for booking a table or learning more.
*   **About Us Section:** Provides a detailed overview of the restaurant, including its commitment to dining experiences, customer testimonials, and core strengths (Hygienic Food, Fresh Environment, Skilled Chefs, Event & Party services). It also features key statistics about the restaurant and an embedded video (placeholder for `thumbnail.mp4`).
*   **Dynamic Menu Display:**
    *   **Today's Delights:** Highlights special or popular dishes with appealing images.
    *   **Categorized Menu:** Displays extensive lists of Appetizers, Main Courses, Desserts, and Drinks, each with an image, name, price, and a brief description.
*   **Meet the Team Section:** Introduces the project's developers, showcasing their roles and contributions to the website.
*   **Online Reservation Form:**
    *   Allows users to book a table by providing personal details (name, email, phone), number of guests, preferred location, and date/time.
    *   **Dynamic Date/Time Validation:** The date input prevents selecting past dates. If today's date is selected, the time input automatically adjusts its minimum value to the current time, preventing reservations in the past for the same day. For future dates, the time defaults to opening hours (10:00).
*   **Contact Us Form:** Enables users to send messages or inquiries to the restaurant.
*   **Direct Contact Information:** Provides email, phone/WhatsApp details, and links to social media platforms (Instagram, Twitter, Facebook, LinkedIn).
*   **Custom Alert System:** Instead of standard browser `alert()` pop-ups, a custom-styled modal alert box is displayed upon successful submission of reservation and contact forms, or for login/signup results.
*   **Login & Signup Pages:** Separate authentication forms accessible via `index.html`:
    *   **Login:** Allows users to log in with a predefined dummy username and password.
    *   **Signup:** Enables new user registration with password validation (must be at least 8 characters, include one uppercase letter, one number, and one special character) and password confirmation.
    *   Upon successful login/signup, users are redirected to `home.html`.
*   **Responsive Footer:** Contains company information, multiple branch locations, open hours, and contact details.

## Responsiveness

The 9ty Delight website is built with a mobile-first approach and is fully responsive, adapting seamlessly to various screen sizes and devices (desktops, tablets, and mobile phones). This is achieved through:

*   **CSS Media Queries:** Extensive use of `@media` rules to apply different styles based on screen width.
*   **Flexible Layouts (CSS Grid & Flexbox):** Core sections like `header`, `home`, `about`, `menu`, `team`, `contact` forms, and `footer` utilize CSS Grid and Flexbox for adaptable arrangements.
    *   On smaller screens, multi-column layouts often collapse into single-column or stack vertically (e.g., the `home` hero section, `about` section, and `team` members transform from grid to stacked elements).
    *   The `menu` items also adjust their display from a multi-column grid to a more linear layout on narrower viewports.
*   **Hamburger Menu:** The navigation links in the header transform into a compact hamburger icon on smaller screens, which expands to reveal the menu when clicked.
*   **Relative Units:** Use of `vw` (viewport width), percentages, and `rem` units for font sizes and element dimensions ensures content scales proportionally.
*   **Flexible Images:** Images are set to `max-width: 100%` to prevent overflow and scale down appropriately within their containers.
*   **Form Adaptability:** Input fields and buttons within forms adjust their width and spacing for better usability on mobile devices.

## Skills Displayed

This project demonstrates proficiency in fundamental web development technologies and concepts:

*   **HTML5:**
    *   Semantic HTML structure for clear and accessible content.
    *   Proper use of tags for sections, forms, navigation, and multimedia.
    *   Form elements and attributes for user input and validation.
*   **CSS3:**
    *   **Layout Design:** Extensive use of CSS Grid and Flexbox for creating complex, adaptable, and responsive page layouts.
    *   **Styling:** Customizing typography, colors, backgrounds, borders, and shadows to create an appealing visual design.
    *   **Responsive Design:** Implementation of media queries to ensure optimal viewing experience across all device sizes.
    *   **Animations & Transitions:** Subtle animations for elements like navigation hover effects, "Today's Delights" items, and custom alert box.
    *   **Positioning:** Use of `position: sticky` for the navigation header.
    *   **Filter Property:** Applied for image icons (e.g., in contact form and footer).
*   **JavaScript:**
    *   **DOM Manipulation:** Selecting and modifying HTML elements (`document.querySelectorAll`, `document.getElementById`, `classList.add/remove`).
    *   **Event Handling:** Attaching event listeners (`scroll`, `click`, `change`, `DOMContentLoaded`, `submit`) to respond to user interactions and page events.
    *   **Scroll Behavior:** Implementing custom scroll-to-section logic with offset adjustments for fixed headers and smooth scrolling (`window.scrollTo`).
    *   **Form Validation:** Basic client-side validation for login/signup forms (e.g., password regex, password matching) and dynamic date/time input constraints.
    *   **Date Object Manipulation:** Using the `Date` object to get current date/time and set minimum values for date/time inputs.
    *   **Custom UI Elements:** Developing a custom alert modal for user feedback.
    *   **Conditional Logic:** Using `if/else` statements for dynamic content and behavior (e.g., form type specific messages, date/time logic).

## Screenshots

*(Please replace these placeholders with actual screenshots of the website on different devices)*

*   **Desktop View - Home Page:**
    ![Screenshot of Desktop Home Page](https://via.placeholder.com/800x450?text=Desktop+Home+Page)

*   **Desktop View - Menu Page:**
    ![Screenshot of Desktop Menu Page](https://via.placeholder.com/800x450?text=Desktop+Menu+Page)

*   **Desktop View - Contact/Reservation Page:**
    ![Screenshot of Desktop Contact/Reservation Page](https://via.placeholder.com/800x450?text=Desktop+Contact+Reservation+Page)

*   **Tablet View - Home Page:**
    ![Screenshot of Tablet Home Page](https://via.placeholder.com/500x700?text=Tablet+Home+Page)

*   **Mobile View - Home Page (with Hamburger Menu opened):**
    ![Screenshot of Mobile Home Page](https://via.placeholder.com/300x600?text=Mobile+Home+Page)

*   **Mobile View - Contact/Reservation Page:**
    ![Screenshot of Mobile Contact/Reservation Page](https://via.placeholder.com/300x600?text=Mobile+Contact+Reservation+Page)

*   **Login/Signup Page:**
    ![Screenshot of Login/Signup Page](https://via.placeholder.com/400x550?text=Login/Signup+Page)

```
