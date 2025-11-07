Speculative Generality

I simply removed some Speculative Generality that I noticed at the beginning when they placed "const a = "increment", b = "counter", h = "CMPM 121 Project";" into the code. It really doesn't do anything as those names are used once or twice and allude to being used a lot but overall just don't. I felt the best smell to describe this was Speculative Generality.

Duplicated Code

There was a lot of duplication in the code for the counter incrementation inside of the button event handlers. So I extracted them into their own function and then called that function in each instance that the code was called in the original code.

Mysterious Name

The names in the code are just one to two letter names which are hard to deciper and also hard to find where they are used just from a simple search. So I changed the names to have more relavance and reflect what is represents in the code.
