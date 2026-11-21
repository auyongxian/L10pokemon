React Native SectionList Apps (C346 Week 05 - Lesson 10)

This repository contains two React Native mobile applications built using Expo, demonstrating SectionList, TouchableOpacity, Image, @expo/vector-icons, and Flexbox styling.

Video Link: https://drive.google.com/file/d/1OPTGre-9XxiqlcFqAaYeT5v_JX2bILxG/view?usp=sharing

📱 Apps Included

1. Exercise #3: Pokemon Cards List

A sectioned list displaying Pokemon trading cards grouped by their element types.

Sections: Electric, Water, and Fire (2 Pokemon per section).

Features:

Top "ADD POKEMON" button with alert feedback.

Dynamic card image loading via card numbers (SV3pt5_EN_<cardNumber>-2x.png).

Color-coded section headers with matching FontAwesome6 element icons.

Interactive rows (TouchableOpacity) that display an alert with the selected Pokemon's name and element.

2. Exercise #4: Cozy Cafe Menu (Exercise4.js)

A themed cafe menu list app built from scratch using the SectionList pattern.

Sections: Coffee, Tea & Matcha, and Pastries (2 menu items per section).

Features:

App title header banner (Cozy Cafe Menu) and "ADD MENU ITEM" button.

Displays each item's name, price, and thumbnail image in a clean Flexbox row layout.

Color-coordinated section headers with FontAwesome6 icons (mug-hot, leaf, cookie-bite).

Interactive menu items that show an alert with the item's name, price, and category when tapped.

📂 Project Structure

├── App.js          # Entry point (exports either Exercise 3 or Exercise4)
├── Exercise4.js    # Cozy Cafe Menu app (Exercise #4)
├── package.json    # Project dependencies
└── README.md       # Project documentation


🚀 How to Run & Switch Between Apps

Install dependencies:

npm install


Start the Expo development server:

npx expo start


Switch between Exercise #3 and Exercise #4:

To run Exercise #4 (Exercise4.js): Ensure App.js contains only:

export { default } from './Exercise4';


To run Exercise #3 (Pokemon Cards): Place the Pokemon Cards code directly in App.js.

🛠️ Technologies Used

React Native & Expo

SectionList for categorized lists and sticky/styled section headers

StyleSheet & Flexbox for responsive layouts

@expo/vector-icons (FontAwesome6) for section icons