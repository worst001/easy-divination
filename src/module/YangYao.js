import AbstractYao from "./AbstractYao"

// 阳爻
class YangYao extends AbstractYao {

    /**
    * Constructor
    * 构造阳乂
    *
    * @return null
    */
    constructor () {
        super('1', 'red')
    }

    /**
    * Print
    * 勾画单个阳夭
    *
    * @return null
    */
    print () {
    }

    /**
    * GetState
    * 获取阳
    *
    * @return state
    */
    getState () {
        return super.getState()
    }

    /**
    * GetColor
    * 获取红色
    *
    * @param  <+Comment+>
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

export default YangYao
