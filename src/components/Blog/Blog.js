import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                       
                       
                    </div>
                    <div className="mt-3">
                        <h1 className="text-2xl font-bold hover:underline">What is the purpose of the ReactJS router?</h1>
                        <p className="mt-2">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                    </div>
                   
                    <div className="mt-3">
                        <h1 className="text-2xl font-bold hover:underline">How does the contest API work in React?</h1>
                        <p className="mt-2">The React Context API is a way for a React app to effectively produce global variables that can be passed around.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-2xl font-bold hover:underline">What is useRef hook in React?</h1>
                        <p className="mt-2">The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.useRef returns a mutable ref object whose.current property is initialized to the passed argument (initialValue).The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its.current property. </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;