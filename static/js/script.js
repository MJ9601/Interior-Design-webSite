document.querySelector('#dropDownIcon').addEventListener('click', dropDownMenuFunc);

document.querySelector('#Xmark').addEventListener('click', hiddenSideBarFunc);

window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 2000);
}


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

document.querySelector('#arrowBall').addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = 'smooth';
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = 'unset';
        
    }, 1200);
})

// document.querySelector('html').addEventListener('scroll', () => {
//     document.querySelector('html').style.scrollBehavior = 'unset';
// })