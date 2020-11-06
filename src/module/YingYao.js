import AbstractYao from "./AbstractYao"

// 阳爻
class YingYao extends AbstractYao {

    /**
    * Constructor
    * 构造乂
    *
    * @return null
    */
    constructor () {
        super('0', 'blue')
    }

    /**
    * Print
    * 勾画单个夭
    *
    * @return null
    */
    print () {
    }

    /**
    * GetState
    * 获取阴
    *
    * @return state
    */
    getState () {
        return super.getState()
    }

    /**
    * GetColor
    * 获取蓝色
    *
    * @return color
    */
    getColor () {
        return super.getColor()
    }

    /**
    * Clone
    * 原型克隆
    *
    * @return instance
    */
    clone () {
        return super.clone(this.getState(), this.getColor())
    }
}

export default YingYao
