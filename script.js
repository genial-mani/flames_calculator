const male = document.getElementById("maleName");
const female = document.getElementById("femaleName");
const submit = document.getElementById("submit");
const nillError = document.getElementById("nillError");
const numError = document.getElementById("numError");
const error = document.getElementById("error");
const letter = document.getElementById("letter");
const meaning = document.getElementById("meaning");
const icon = document.getElementById("icon");

// Letters
// meaning
// icon
const allLetters = letter.getElementsByTagName('li');
const allMeanings = meaning.getElementsByTagName('li');
const allIcons= icon.getElementsByTagName('li');
const loader = document.getElementById('loader');

for(let i=0;i<allLetters.length;i++)
{
    allLetters[i].style.display = 'none'
}
for(let i=0;i<allMeanings.length;i++)
{
    allMeanings[i].style.display = 'none'
}
for(let i=0;i<allIcons.length;i++)
{
    allIcons[i].style.display = 'none'
}


const allErrors = error.getElementsByTagName("p");

for (let i = 0; i < allErrors.length; i++) {
    allErrors[i].style.display = "none";
}

let name1, name2;

male.addEventListener('input', updateNames);
female.addEventListener("input", updateNames);

function updateNames() {
    name1 = male.value.toLowerCase();
    name2 = female.value.toLowerCase();
}

loader.style.display = 'none';

submit.addEventListener("click", (e) => {
    e.preventDefault();

    for (let i = 0; i < allErrors.length; i++) {
        allErrors[i].style.display = "none";
    }

    // 
    for(let i=0;i<allLetters.length;i++)
    {
        allLetters[i].style.display = 'none'
    }
    for(let i=0;i<allMeanings.length;i++)
    {
        allMeanings[i].style.display = 'none'
    }
    for(let i=0;i<allIcons.length;i++)
    {
        allIcons[i].style.display = 'none'
    }

    if (!(/^[a-zA-Z\s]*$/.test(name1)) || !(/^[a-zA-Z\s]*$/.test(name2))) {
        numError.style.display = "block";
        return;
    }

    if (!name1 || !name2) {
        nillError.style.display = "block";
        return;
    }

    if (!(name1.trim()) || !(name2.trim())) {
        nillError.style.display = "block";
        return;
    }

    name1 = name1.trim();
    name2 = name2.trim();

    const oldName1 = name1;
    const oldName2 = name2;

    let remainingLetters = '';
    for (const char of name1) {
        if (name2.includes(char)) {
            // Remove the first occurrence of the common letter in name2
            name2 = name2.replace(char, '');
        } else {
            remainingLetters += char;
        }
    }

    // Combine remaining letters from name1 and name2
    remainingLetters += name2;

    const flamesLetters = ['F', 'L', 'A', 'M', 'E', 'S'];

    let indexToRemove = 0;
    while (flamesLetters.length > 1) {
        // Determine the index to remove based on the length of remainingLetters
        indexToRemove = (indexToRemove + remainingLetters.length - 1) % flamesLetters.length;
        
        flamesLetters.splice(indexToRemove, 1);
    }
    const flamesResult = flamesLetters[0];

    loader.style.display = 'flex'



    setTimeout(()=>{
        loader.style.display = 'none'

        switch (flamesResult) {
            case 'F':
                allLetters[0].style.display = 'block'
                allMeanings[0].style.display = 'block'
                allIcons[0].style.display = 'block'
                break;
            case 'L':
                allLetters[1].style.display = 'block'
                allMeanings[1].style.display = 'block'
                allIcons[1].style.display = 'block'
                break;
            case 'A':
                allLetters[2].style.display = 'block'
                allMeanings[2].style.display = 'block'
                allIcons[2].style.display = 'block'
                break;
            case 'M':
                allLetters[3].style.display = 'block'
                allMeanings[3].style.display = 'block'
                allIcons[3].style.display = 'block'
                break;
            case 'E':
                allLetters[4].style.display = 'block'
                allMeanings[4].style.display = 'block'
                allIcons[4].style.display = 'block'
                break;
            case 'S':
                allLetters[5].style.display = 'block'
                allMeanings[5].style.display = 'block'
                allIcons[5].style.display = 'block'
                break;
            default:
                alert("Oops! Try again");
        }
    },3000);

    
    // Display result in the HTML document


    console.log(flamesResult);

    name1 = oldName1;
    name2 = oldName2;

    return;
});
