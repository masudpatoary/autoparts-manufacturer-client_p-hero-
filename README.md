# Project Name: [AutoParts](https://valley-auto-parts-12240.firebaseapp.com/)
# Project Name: [AutoParts](https://valley-auto-parts-12240.web.app/)

# Server the Project: [Space Analysis](https://vast-sands-13931.herokuapp.com/)


### This project is Customized with
* [React](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)


### Feature of the  Project:
* this project is built for both user and for admin
* Authentication: (for both admin and user)
    * Email and password signin and sign up,
    * There is a reset password button if user forgate password
    * Signin with google

* Features for Admin
    * an admin can add new parts to DB 
    * an admin can delete parts to DB 
    * an admin can see all orders
    * he can set the shipping stutus an status will update to DB to the respective order
    * and if he change shipping stutus to "Delivered" status confirmation button will automacally disable
    * he can make another user to ADMIN 

* Features for Users:
    * any user can see all products (don't need to sign in)
        * to access below features need to be signed in
    * can make order
    * from dashboard user can see all of his orders
    * can pay specific order
    * can cancel specific order (this action will delete order from DB)
    * but can't cancel oeder if it is a paid order or confirmed or shipped or delivered by the manufacturer
    * from dashboard user can see all his reviews and a new review

* HomePage contain latest added inventories, runningout inventories