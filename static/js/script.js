document.querySelector('#dropDownIcon').addEventListener('click', dropDownMenuFunc);

document.querySelector('#Xmark').addEventListener('click', hiddenSideBarFunc);

function dropDownMenuFunc() {
    document.querySelector('.container').className +=' sideBarShowed';
    console.log('Click');
    document.querySelector('#dropDownIcon').classList.toggle('navbarHidden');
    console.log(document.querySelector('.container').className);
    
}

function hiddenSideBarFunc() {
    console.log(document.querySelector('.container').className);
    const sidebarClassArray = document.querySelector('.container').className.split(' ');
    console.log(sidebarClassArray);
    document.querySelector('.container').className = sidebarClassArray[0];
    console.log('Click');
    document.querySelector('#dropDownIcon').className -= "navbarHidden";
    console.log(document.querySelector('.container').className);
    
}