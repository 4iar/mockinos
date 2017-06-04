[![Build Status](https://travis-ci.org/4iar/mockinos.svg?branch=master)](https://travis-ci.org/4iar/mockinos)
# Mockino's
Mockino's is a mock server for the [Domino's (UK) pizza tracker](https://www.dominos.co.uk/PizzaTracker/scripts/app-caebeadae9.min.js) that is intended to help with the development of unofficial pizza tracking applications.

# Installation

```
git clone https://github.com/4iar/mockinos.git
cd mockinos
npm install
```

# Usage

Point your pizza tracking application to http://localhost:3000/getOrderDetails.

Run the mock server
```
npm start
```

Follow the instructions given in the terminal to change the status (delivered, out for delivery, baking, etc).
