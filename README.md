# Questions Answer

#### 1) What is the difference between `null` and `undefined`?
> ** Ans: null এবং undefined এর মধ্যে পার্থক্য হচ্ছে null মানে কোনো ভ্যারিয়েবলের মান ইচ্ছাকৃত ভাবে null সেট করা হইছে ভ্যারিয়েবলের মান খালি বা নাই বুঝানোর জন্য। অপরদিকে undefined মানে হচ্ছে কোনো ভ্যারিয়েবল ডিক্লেয়ার করা হইছে কিন্তু কোনো মান সেট করা হয়নি।

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
> ** Ans: map() ফাংশনের সাহায্যে কোনো array এর উপর লুপ চালিয়ে array এর প্রতিটা আইটেমের উপর কোনো কাজ চালানো যায়, কাজ করার পরে একটা নতুন array রিটার্ন করে। অপরদিকে forEach() ফাংশনের সাহায্যে কোনো array এর উপর লুপ চালিয়ে array এর প্রতিটা আইটেমের উপর কোনো কাজ করা যায় কিন্তু forEach() কোনো নতুন array রিটার্ন করে না map() এর মতো। 

#### 3) What is the difference between `==` and `===`?
> ** Ans: == এবং === এর মধ্যে পার্থক্য হচ্ছে == শুধু ভ্যালু তুলনা করে, টাইপ তুলনা করে না। অন্যদিকে === ভ্যালুর সাথে সাথে টাইপ ও তুলনা করে।

#### 4) What is the significance of `async`/`await` in fetching API data?
> ** Ans: API থেকে ডাটা আনতে কিছুটা সময় লাগে asynchronous operation যদি ঠিকভাবে হ্যান্ডেল করা না হয়, তাহলে কোড এলোমেলো হয়ে যেতে পারে। asynchronous কোডকে synchronous এর মতো দেখতে করে async/await এর মাধ্যমে। 

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
> ** Ans: গ্লোবাল স্কোপ হচ্ছে প্রোগ্রামের যেকোনো জায়গা থেকেই এক্সেস করা যায়। ফাংশন স্কোপ হচ্ছে ফাংশনের মধ্যে ডিক্লেয়ার করা ভ্যারিয়েবল শুধুমার সেই ফাংশনের মধ্যেই এক্সেস করা যায়। ব্লক স্কোপ হচ্ছে {} এর মধ্যে ডিক্লেয়ার করা ভ্যারিয়েবল শুধুমার সেই ব্লকের মধ্যেই এক্সেস করা যায়।