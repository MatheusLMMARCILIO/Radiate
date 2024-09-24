const body = document.querySelector('body')

body.style.margin = '0px'
body.style.padding = '0px'

function TopBanner() {
    //Div
    const bannerTop = document.createElement('div')

    bannerTop.style.width = '100%'
    bannerTop.style.height = '40px'
    bannerTop.style.backgroundColor = '#6b5c4c'
    bannerTop.style.display = 'flex'
    bannerTop.style.alignItems = 'center'
    bannerTop.style.justifyContent = 'center'

    //Text
    const pBanner = document.createElement('p')

    pBanner.innerText = 'A beauty e-commerce'

    pBanner.style.fontFamily = 'Arial'
    pBanner.style.color = '#f2ede9'
    pBanner.style.fontSize = '13px'
    pBanner.style.fontWeight = '700'

    bannerTop.appendChild(pBanner)
    body.appendChild(bannerTop)

}

function menu() {

    //div menu
    const divMenu = document.createElement('div')

    //style
    divMenu.style.maxWidth = '100%'
    divMenu.style.width = '100%'
    divMenu.style.height = '72px'
    divMenu.style.backgroundColor = 'white'
    divMenu.style.display = 'flex'
    divMenu.style.alignContent = 'cemter'
    divMenu.style.justifyContent = 'space-between'

    //Logo
    const aImg = document.createElement('a')
    const imgLogo = document.createElement('img')

    imgLogo.src = 'IMAGE/logo.svg'
    imgLogo.href = 'index.html'

    imgLogo.style.maxWidth = '100%'
    imgLogo.style.width = '117px'
    imgLogo.style.marginLeft = '80px'

    //Links

    const ulLinks = document.createElement('ul')

    ulLinks.style.display = 'flex'
    ulLinks.style.marginRight = '80px'

    const liShop = document.createElement('li')
    const liBest = document.createElement('li')
    const liJournal = document.createElement('li')
    const liContact = document.createElement('li')

    liShop.style.display = 'flex'
    liShop.style.margin = '0px 10px 0px 10px'

    liBest.style.display = 'flex'
    liBest.style.margin = '0px 10px 0px 10px'


    liJournal.style.display = 'flex'
    liJournal.style.margin = '0px 10px 0px 10px'

    liContact.style.display = 'flex'
    liContact.style.margin = '0px 10px 0px 10px'

    const aShop = document.createElement('a')
    const aBest = document.createElement('a')
    const aJournal = document.createElement('a')
    const aContact = document.createElement('a')

    aShop.style.color = 'black'
    aShop.style.textDecoration = 'none'
    aShop.style.fontFamily = 'Arial'

    aBest.style.color = 'black'
    aBest.style.textDecoration = 'none'
    aBest.style.fontFamily = 'Arial'

    aJournal.style.color = 'black'
    aJournal.style.textDecoration = 'none'
    aJournal.style.fontFamily = 'Arial'

    aContact.style.color = 'black'
    aContact.style.textDecoration = 'none'
    aContact.style.fontFamily = 'Arial'

    aShop.href = '#'
    aBest.href = '#'
    aJournal.href = '#'
    aContact.href = '#'

    aShop.innerText = 'Shop all'
    aBest.innerText = 'Bestsellers'
    aJournal.innerText = 'Journal'
    aContact.innerText = 'Contact'

    liShop.appendChild(aShop)
    liBest.appendChild(aBest)
    liJournal.appendChild(aJournal)
    liContact.appendChild(aContact)

    ulLinks.appendChild(liShop)
    ulLinks.appendChild(liBest)
    ulLinks.appendChild(liJournal)
    ulLinks.appendChild(liContact)

    divMenu.appendChild(imgLogo)

    divMenu.appendChild(ulLinks)

    body.appendChild(divMenu)

}

function banner() {
    //section
    const allSection = document.createElement('section')

    allSection.style.width = '100%'
    allSection.style.height = '210x'
    allSection.style.display = 'flex'
    allSection.style.alignContent = 'center'
    allSection.style.justifyContent = 'space-between'
    allSection.style.flexDirection = 'row-reverse'
    allSection.style.backgroundColor = '#f2ede9'
    allSection.style.padding = '128px 0px 128px 0px'


    // div left
    const Divleft = document.createElement('div')
    Divleft.style.width = '40%'
    Divleft.style.height = '100%'
    Divleft.style.paddingLeft = '80px'


    //h1
    const h1ElLeft = document.createElement('h1')
    const h1ElLeft2 = document.createElement('h1')
    h1ElLeft.innerText = 'A new age of'
    h1ElLeft2.innerText = 'skincare'

    h1ElLeft.style.margin = '0px'
    h1ElLeft2.style.margin = '0px'
    h1ElLeft.style.fontWeight = '100'

    h1ElLeft.style.fontSize = '100px'
    h1ElLeft2.style.fontSize = '100px'
    h1ElLeft2.style.fontWeight = '100'

    //div right
    const divRight = document.createElement('div')
    divRight.style.width = '40%'
    divRight.style.height = '100%'
    divRight.style.paddingRight = '80px'
divRight.style.display = 'flex'
divRight.style.alignItems = 'center'
divBtn.style.justifyContent = 'center.'

divRight.style.flexDirection = 'column'


    //text right
    const pRight = document.createElement('p')
    pRight.innerText = 'Welcome to the skincare revolution. The new age of beauty is here. Create a personalized routine with the best products. Helping you to achieve a youthful glow like never before.'
    pRight.style.width = '80%'
    pRight.style.fontSize = '18px'
    pRight.style.fontFamily = 'arial'
    pRight.style.color = '#455366'

    //div btn

    const divBtn = document.createElement('div')

    // first btn
    const btnRight = document.createElement('button')

    btnRight.innerText = 'Shop collection'

    btnRight.style.width = '150px'
    btnRight.style.height = '48px'
    btnRight.style.backgroundColor = '#6b5c4c'
    btnRight.style.border = '1px solid #6b5c4c'
    btnRight.style.borderRadius = '12px'
    btnRight.style.color = 'white'
    btnRight.style.fontFamily = 'arial'
    btnRight.style.fontSize = '15px'
    btnRight.style.fontWeight = '700'
    btnRight.style.borderRadius = '12px'
    btnRight.style.cursor = 'pointer'

    //second btn 

    const btnRight2 = document.createElement('button')

    btnRight2.innerText = 'Our story'

    btnRight2.style.width = '109px'
    btnRight2.style.height = '48px'
    btnRight2.style.backgroundColor = '#ffffff'
    btnRight2.style.border = '1px solid white'
    btnRight2.style.borderRadius = '12px'
    btnRight2.style.color = 'black'
    btnRight2.style.fontFamily = 'arial'
    btnRight2.style.fontSize = '15px'
    btnRight2.style.fontWeight = '700'
    btnRight2.style.borderRadius = '12px'
    btnRight2.style.marginLeft = '10px'
    btnRight2.style.cursor = 'pointer'

    Divleft.appendChild(h1ElLeft)
    Divleft.appendChild(h1ElLeft2)

    divRight.appendChild(divBtn)
    divRight.appendChild(pRight)
    divRight.appendChild(btnRight)
    allSection.appendChild(divRight)
    divRight.appendChild(btnRight2)
    allSection.appendChild(Divleft)
    body.appendChild(allSection)
}

function bestEssentials() {

    //all page
    const allBestSection = document.createElement('section')

    allBestSection.style.width = '100%'
    allBestSection.style.height = '630px'

    // text
    const h1Best = document.createElement('h1')

    h1Best.style.display = 'flex'
    h1Best.style.alignItems = 'center'
    h1Best.style.fontSize = '36px'
    h1Best.style.fontWeight = '100'
    h1Best.style.marginLeft = '60px'

    h1Best.innerText = 'Bestselling essentials'



    // products

    const products = [
        { id: '1212', imgUrl: 'IMAGE/hydro.jpg', nome: 'Hydro Repair', price: 'R$ 15.00 USD' },
        { id: '2323', imgUrl: 'IMAGE/Deodorant.jpg', nome: 'The Deodorant Eucalyptus', price: 'R$ 39.00 USD' },
        { id: '3434', imgUrl: 'IMAGE/HoneySoap.jpeg', nome: 'Honey Soap Disk', price: 'R$ 24.00 USD' },
        { id: '4545', imgUrl: 'IMAGE/SageSoap.jpg', nome: 'Sage Soap', price: 'R$ 24.00 USD' }
    ]

    const ulP = document.createElement('ul')

    ulP.style.display = 'flex'
    ulP.style.alignItems = 'center'
    ulP.style.justifyContent = 'center'
    ulP.style.padding = '0px'

    products.forEach(products => {

        const liP = document.createElement('li')

        const imgEl = document.createElement('img')

        imgEl.src = products.imgUrl

        imgEl.style.width = '308px'
        imgEl.style.height = '409px'
        imgEl.style.borderRadius = '12px'

        const productsInfo = document.createTextNode(`${products.nome} - ${products.price} `)

productsInfo.style.fontSize = '12px'

        liP.style.display = 'flex'
        liP.style.alignItems = 'center'
        liP.style.justifyContent = 'center'
        liP.style.flexDirection = 'column'
        liP.style.margin = '30px'




        liP.appendChild(imgEl)
        liP.appendChild(productsInfo)

        ulP.appendChild(liP)


    })

    body.appendChild(allBestSection)
    allBestSection.appendChild(h1Best)
    allBestSection.appendChild(ulP)


}




TopBanner()
menu()
banner()
bestEssentials()