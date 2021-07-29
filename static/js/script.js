document.querySelector('#dropDownIcon').addEventListener('click', dropDownMenuFunc);

document.querySelector('#Xmark').addEventListener('click', hiddenSideBarFunc);

function dropDownMenuFunc() {
    document.querySelector('.container').className +=' sideBarShowed';
    console.log('Click');
    document.querySelector('#dropDownIcon').classList.toggle('navbarHidden'); /* If included, turns the toggle into a one way-only operation. If set to false, then token will only be removed, but not added. If set to true, then token will only be added, but not removed. */
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