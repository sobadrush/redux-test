const initialState: any = {
    count: 0
};

export function counterReducer(state = initialState/* 定義初始狀態 */, action: any) {

    console.log(` === counterReducer be called === `);

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}
