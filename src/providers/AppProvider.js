import {Component} from 'react';
import AppContext from "../contexts/AppContext";

class AppProvider extends Component{
    state = {
        linkList: [],
        linkName: '',
        linkUrl: '',
        linkPage: [],
        shortType: 'za',
        pageIndex: 1,
        pageCount: 1,
        pageRowCount: 3,
        deleteItemUpdateTime: 0,
        deleteItemName: '',
        showDeletePopup: false,
        toasterData: []
    }
    componentDidMount() {
        this.getLinkListFromStorage();
    }
    shortList(linkList, isLowToHigh){
        const hightToLow = function(a, b) {
            if ( a.point === b.point ) {
                return a.updateTime < b.updateTime ? 1 : -1; 
            }
            if ( a.point < b.point ){
                return 1;
            }
            if ( a.point > b.point ){
                return -1;
            }
        }
        const lowToHigh = function(a, b) {
            if ( a.point === b.point ) {
                return a.updateTime < b.updateTime ? 1 : -1; 
            }
            if ( a.point < b.point ){
                return -1;
            }
            if ( a.point > b.point ){
                return 1;
            }
        }
        const sortFunction = isLowToHigh ? lowToHigh : hightToLow;
        linkList = linkList.sort(sortFunction);
        this.setState({linkList}, () => {
            this.paginate();
        });
        localStorage.setItem('linkList', JSON.stringify(linkList));
    }
    paginate(index){
        let { pageRowCount, linkList, pageIndex } = this.state;  
        const pageCount = Math.ceil(linkList.length / pageRowCount);
        pageIndex = Math.min(pageIndex, pageCount);
        pageIndex = Math.max(pageIndex, 1);
        const nextPageIndex = index ? index : pageIndex;
        const startIndex = pageRowCount * (nextPageIndex - 1);
        const endIndex = startIndex + pageRowCount;
        const linkPage = linkList.slice(startIndex, endIndex);
        this.setState({
            linkPage, 
            pageCount, 
            pageIndex: nextPageIndex
        });
    }
    goToPreviusPage(){
        const { pageIndex } = this.state;
        const newIndex = pageIndex - 1;
        this.paginate(newIndex);
    }
    goToNextPage() {
        const { pageIndex, pageCount } = this.state;
        const newIndex = pageIndex + 1;
        if (newIndex > pageCount) {
            return;
        }
        this.paginate(newIndex);
    }
    returnToListClicked(updateTime, linkType){
        let { linkList } = this.state;
        const listItem = linkList.filter(item => item.updateTime === updateTime);
        const index = linkList.indexOf(listItem[0]);
        if (linkType === 'up') {
            linkList[index].point += 1;
        }
        else {
            linkList[index].point -= 1;
        }
        linkList[index].updateTime = new Date().getTime();
        const isLowToHigh = this.state.shortType === 'az';
        this.shortList(linkList, isLowToHigh);
    }
    addNewLink(){
        const newlink = {
            name: this.state.linkName,
            url: this.state.linkUrl,
            point: 0,
            updateTime: new Date().getTime()
        }
        let linkList = this.state.linkList;
        linkList.push(newlink);
        this.setState({
            linkName: '',
            linkUrl: ''
        });
        const isLowToHigh = this.state.shortType === 'az';
        this.shortList(linkList, isLowToHigh);
        this.addToaster(this.state.linkName, 'added');
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    orderByChanged(event) {
        const shortType = event.target.value;
        this.setState({shortType});
        const linkList  = this.state.linkList;
        const isLowToHigh = shortType === 'az';
        this.shortList(linkList, isLowToHigh);
    }
    getLinkListFromStorage() {
        const linkListString = localStorage.getItem('linkList');
        let linkList = JSON.parse(linkListString);
        linkList = linkList ? linkList : [];
        const isLowToHigh = this.state.shortType === 'az';
        this.shortList(linkList, isLowToHigh);
    }
    deleteListItemClicked(updateTime, name){
        this.setState({
            deleteItemUpdateTime: updateTime,
            deleteItemName: name,
            showDeletePopup: true
        });
    }
    popupOkClicked(){
        let { linkList, deleteItemUpdateTime } = this.state;
        const item = linkList.filter(item => item.updateTime === deleteItemUpdateTime);
        linkList = linkList.filter(item => item.updateTime !== deleteItemUpdateTime);
        const isLowToHigh = this.state.shortType === 'az';
        this.shortList(linkList, isLowToHigh);
        this.addToaster(item[0].name, 'removed');
        this.setState({
            showDeletePopup: false
        });
    }
    popupCancelClicked(){
        this.setState({
            showDeletePopup: false
        });
    }
    addToaster(itemName, actionText){
        let {toasterData} = this.state;
        const addedTime = new Date().getTime();
        const newToaster = {
            itemName: itemName,
            actionText: actionText,
            addedTime: addedTime
        }
        toasterData.push(newToaster);
        this.setState({
            toasterData
        }, _ => setTimeout(_ => {
            const toasterData = this.state.toasterData.filter(item => item.addedTime !== addedTime);
            this.setState({toasterData});
        }, 5000));
    }
    render(){
        return(
            <AppContext.Provider value={{
                state: this.state,
                actions: {
                    returnToListClicked: (rowNo, changeType) => this.returnToListClicked(rowNo, changeType),
                    addNewLink: _ => this.addNewLink(),
                    onInputchange: e => this.onInputchange(e),
                    orderByChanged: e =>  this.orderByChanged(e),
                    paginate: p => this.paginate(p),
                    goToPreviusPage: _ => this.goToPreviusPage(),
                    goToNextPage: _ => this.goToNextPage(),
                    popupOkClicked: _ => this.popupOkClicked(),
                    deleteListItemClicked: (ut, name)  => this.deleteListItemClicked(ut, name),
                    popupCancelClicked: _ => this.popupCancelClicked()
                }
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;