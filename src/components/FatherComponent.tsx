import React from 'react'
import { connect } from 'react-redux'

interface IMyProps {
    // empName?: string; // 可以加 ? 變成可選參數
    empName: string;
    count?: number
}
interface IMyState {
    empTitle?: string, // empName?: string; // 可以加 ? 變成可選參數
    count?: number
}

// React.Component<P, S>
// ref. https://devblog.xero.com/typescript-and-react-whats-react-component-p-s-mean-cfddc65f81e1
// ref. https://blog.csdn.net/qq_30101131/article/details/84799731

// class FatherComponent extends React.Component<IMyProps, IMyState>{
class FatherComponent extends React.Component<any, any>{

    constructor(props: any, state: any) {
        super(props);
        console.log("props = ", props, ", state = ", state);
        this.state = {
            count: 0
        }
    }

    increment: any = () => {
        // 【v1 - 自身state】
        // this.setState({
        //     count: this.state.count + 1
        // });

        // 【v2 - 改 redux】
        // this.props.dispatch({ type: 'INCREMENT' }/* action */);

        // 【v3 - 改 redux + mapDispatchToProps】
        this.props.doCounter('INCREMENT');
    }

    decrement: any = () => {
        // 【v1 - 自身state】
        // this.setState({
        //     count: this.state.count - 1
        // });

        // 【v2 - 改 redux】
        // this.props.dispatch({ type: 'DECREMENT' }/* action */);

        // 【v3 - 改 redux + mapDispatchToProps】
        this.props.doCounter('DECREMENT');
    }

    render() {
        return (
            // <> </> → 是 <React.Fragment> 的語法糖
            <>
                <div style={{ border: "3px solid red" }}>
                    <h1>我是FatherComponent - Counter</h1>
                    <div style={{ margin: "1cm" }}>
                        <button type="button"
                            className="btn btn-outline-primary"
                            style={{ margin: "0.5cm" }}
                            onClick={this.decrement}> - </button>

                        {/* <span>{ this.state.count }</span> */}
                        <span>{this.props.countGG}</span>

                        <button type="button"
                            className="btn btn-outline-primary"
                            style={{ margin: "0.5cm" }}
                            onClick={this.increment}> + </button>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        countGG: state.count
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
    doCounter: (_typeStr: string) => {
        console.log(" ownProps = ", ownProps); // 直接傳入本組件的 props
        dispatch({ type: _typeStr })
    }
})

// export default FatherComponent; // 改成下面這種方式，用 高階組件(HOC) 將 FatherComponent 裝飾成 Redux組件
export default connect(mapStateToProps, mapDispatchToProps)(FatherComponent);