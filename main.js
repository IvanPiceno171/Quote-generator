const quoteButton = document.getElementById("load-quote");
quoteButton.addEventListener("click", printQuote);

const wholeQuote = document.querySelector(".quote");
const source = document.getElementById("source");
const citation = document.querySelector(".citation");
const year = document.querySelector(".year");

//array of objects
//keys are quotes,source,cit, citation: ''ation,year

const quoteObj = [
    {quote:'The real test is not whether you avoid this failure, because you won\'t. It\'s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.', source: 'Barack Obama', citation: 'Twitter', year: '2011'}, 
    {quote:'Many of life\'s failures are people who did not realize how close they were to success when they gave up', source: 'Thomas A. Edison', citation: 'Google', year: '1915'}, 
    {quote:'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.', source: 'Steve Jobs', citation: 'Facebook', year: '2005'}, 
    {quote:'The greatest glory in living lies not in never falling, but in rising every time we fall', source: 'Nelson Mandela', citation: 'Google', year: '1909'}, 
    {quote:'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.', source: 'Yoda', citation: 'The Phantom Menance', year: '1999'}, 
];

    //printQuote and grabs objects properties value
    function printQuote(){
        let indexGrabber =  quoteObj[Math.floor(Math.random() * quoteObj.length)];
        wholeQuote.textContent = indexGrabber.quote;
        source.textContent = indexGrabber.source;
        citation.textContent = indexGrabber.citation;
        year.textContent = indexGrabber.year;
        
    }
    