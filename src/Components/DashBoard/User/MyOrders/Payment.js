import React, { useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../../../Shared/Loading';
import { useQuery } from 'react-query';


const Payment = () => {
    const { id } = useParams();
    const stripePromise = loadStripe('pk_test_51L3uocC4Yx0FgrUsH3ykL1ra9pA4u4qVNIGogbqYDOSn6od4uuEp5T5wivY9LhvMkBY3G7vaKdLLKZxNnOPuj48e00Vmt30eFr');

    //    let stutus= "Pre Payment"
    // const url = `https://auto-server-o5cy.onrender.com/order/${id}`;
    const url = `https://auto-server-o5cy.onrender.com/order/${id}`;

    const { data, isLoading } = useQuery(['order'], () => fetch(url)

        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    let payment = { paymentStutus: "Paid" }
    const handlePaymentStutus = async (event) => {
        console.log(id)
        console.log(payment)
        event.preventDefault()
        await fetch(`https://auto-server-o5cy.onrender.com/order/payment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ payment: "Paid" })
        })
            .then(res => res.json())
            .then(result => {
                console.log('New parts added to database', result);

            })
    }


    return (
        <div className='w-full flex justify-center md:mt-10'>
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{data.partsName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="divider"></div>
                <div className="card-body">
                    <h2 className="card-title text-center">Checkout Form</h2>
                    <div>
                        <Elements stripe={stripePromise}>
                            <form >
                                <CardElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                                <button
                                    onClick={handlePaymentStutus}
                                    disabled={data.paymentStutus === "Paid"}
                                    className='btn btn-success btn-sm mt-4' type="submit" >
                                    Pay
                                </button>
                            </form>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;