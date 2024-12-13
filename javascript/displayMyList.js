const container = document.querySelector(".container")
const placeholderP = document.querySelector(".checklist-comment")
let placeholderPTC = placeholderP.textContent
placeholderP.textContent = placeholderPTC.length > 400 ? placeholderPTC.substring(0, 400) + ' <show more...>' : placeholderPTC
//
const card = function (container) {
    const listItems = JSON.parse(localStorage.getItem("myList"))
    listItems.forEach(x => {
        console.log(x.image);
        // Head
        const checkHead = document.createElement('div')
        checkHead.classList.add('checklist-header')
        // title
        const checkTitle = document.createElement('h3')
        checkTitle.innerText = x.title;
        //images
        const checkImgC = document.createElement('div')
        checkImgC.classList.add('checklist-image')
        const checkImg = document.createElement('img')
        const imgCond = x.image.includes('https')
        checkImg.src = imgCond ? x.image : "../images/July_night_sky_(35972569256).jpg";
        checkImgC.append(checkImg)
        //page info
        const checkPages = document.createElement('p')
        checkPages.textContent = '40 pages left'
        //
        const head = [checkTitle, checkImgC, checkPages]
        head.forEach(x => checkHead.append(x))
        // Body
        const checkBody = document.createElement('div')
        checkBody.classList.add("checklist-body")
        const checkComment = document.createElement('p')
        //
        let shortenedComment = x.comment.length > 400 ? x.comment.substring(0, 400) + ' <show more...>' : x.comment;

        checkComment.textContent = shortenedComment;
        const checkDynamic = document.createElement('div')
        checkDynamic.innerHTML = `<button class="btn" id="showBtn">Show work</button>
        <input type="checkbox" name="status" id="status" class="status">`
        //
        const body = [checkComment, checkDynamic]
        const bodyClasses = ["checklist-comment", "checklist-dynamic"]
        body.forEach((el, i) => {
            checkBody.append(el)
            body[i].classList.add(bodyClasses[i])
        })
        // container 
        const checkElements = [checkHead, checkBody]
        const checklist = document.createElement('div')
        checkElements.forEach(el => checklist.append(el))
        //
        checklist.setAttribute('class', 'checklist');
        container.appendChild(checklist)
        const showBtn = document.querySelector('#showBtn')
        showBtn.addEventListener('click', () => {
            localStorage.setItem('temp', JSON.stringify(x))
            window.location.href = "./showPage.html";
        })


    })



}
card(container);
