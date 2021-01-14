export class Element{
    constructor(tag){
        let element = document.createElement(tag)
        this.getElement = () => element
    }
    setContent(content){
        this.getElement().innerText = content
    }
    add(parent, pos = -1, ...coor){
        if(pos == -1)
            parent.append(this.getElement())
        else{
            let childrens = parent.childNodes
            parent.insertBefore(this.getElement(), childrens[pos])
        }

        if(coor.length > 0){
            this.getElement().style.marginTop = `${coor[0]}px`
            this.getElement().style.marginBottom = coor[1] ? `${coor[1]}px` :'0px'
            this.getElement().style.marginLeft = coor[2] ? `${coor[2]}px` :'0px'
            this.getElement().style.marginRight = coor[3] ? `${coor[3]}px` :'0px'
        }
    }
    setClass(classes){
        this.getElement().className+=classes
    }

    removeClass(...classes){
        for(let c of classes)
            this.getElement().classList.remove(c)
    }

    setEvent(event, doEvent){
        this.getElement().addEventListener(event, doEvent);
    }

    setSize(...sizes){
        this.getElement().style = `width: ${sizes[0]}px; height: ${sizes[1]}px`
    }
    setName(name){
        this.getElement().name = name
    }
    setType(type){
        if(this.getElement().tagName == "INPUT") this.getElement().type = type
    }
    setHTML(html){
        this.getElement().innerHTML=html;
    }

    setAnimation(){
        let cont = 0;
        const el = this.getElement()
        el.style.opacity = `${cont}%`;
        setInterval(
            () => {
                if(cont) clearInterval(this)
                cont++
                el.style.opacity = `${cont}%`;
            }
        , 10);
    }
}
