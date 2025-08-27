# Assignment-5

* প্রশ্নঃ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll ?

 উত্তরঃ  getElementById শুধু ই ইউনিক একটি ID নিয়ে কাজ করে। 
       getElementsByClassName একই নামের সকল class নিয়ে কাজ করে।
       querySelector যেকোনো css এর শুধুমাত্র প্রথম Element নিয়ে কাজ করে।
       querySelectorAll সকল ID, Class এবং অন্যান্য Element নিয়ে কাজ করে। 

* প্রশ্নঃ How do you create and insert a new element into the DOM ?

উত্তরঃ  প্রথমে আমাদের নতুন এলিমেন্ট তৈরি করতে হবে এভাবে document.createElement("tagName"),
       তারপর এই এলিমেন্ট এর ভিতর innerText দিয়ে টেক্সট বসাতে হবে,
       এবং লাস্টে appendChild() বা append() দিয়ে DOM এর ভিতরে বসাতে হয়। 

* প্রশ্নঃ What is Event Bubbling and how does it work ?

উত্তরঃ  ইভেন্ট বাবলিং মানে যখন এলিমেন্ট এ ক্লিক করা হয় তখন ক্লিক টা সেই এলিমেন্ট এ কাজ করে, তারপর ধাপে ধাপে উপরের এলিমেন্ট এ যেতে থাকে। 
         যেমন Parent থেকে Body তে।

* প্রশ্নঃ What is Event Delegation in JavaScript? Why is it useful ?

উত্তরঃ  Event Delegation হলো একটা parent element এ event listener বসানো, যাতে তার সব child element এর event handle করা যায়।
       এটা এই জন্য দরকার যে--
       # প্রতিটা এলিমেন্ট এ আলাদা আলদা করে ইভেন্ট বসাতে হয় না। 
       # কোড কম লিখতে হয়। 
       # Performance ভালো হয়, কারণ কম event listener ব্যবহার করা হয়।

* প্রশ্নঃ What is the difference between preventDefault() and stopPropagation() methods ?

উত্তরঃ  preventDefault() এটি ব্রাউজারের সাধারণ আচরণ বন্ধ করে দেয়। যেমন ফর্ম সাবমিট করলে পেজ রিলোড হয়। preventDefault() দিলে তা বন্ধ হয়ে যায়। 
       stopPropagation() হচ্ছে ইভেন্ট বাবলিং থামিয়ে দেয় যাতে ইভেন্ট ক্লিক উপরে এলিমেন্ট এ ক্লিক করে যেতে না পারে। যেখানে stopPropagation() দেওয়া হবে সেখানেই ইভেন্ট শেষ হবে। 