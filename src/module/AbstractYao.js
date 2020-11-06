// 抽象乂类（原型模式）
class AbstractYao {

    /**
    * Constructor
    * 抽象构造函数
    *
    * @param string state 乂的阴阳状态
    * @param string color 乂的颜色
    *
    * @return null
    */
    constructor (state, color) {
        this.state = state
        this.color = color
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
    * 获取阴阳状态
    *
    * @return state
    */
    getState () {
        return this.state
    }

    /**
    * GetColor
    * 获取颜色
    *
    * @return color
    */
    getColor () {
        return this.color
    }

    /**
    * Clone
    * 原型克隆
    *
    * @return instance
    */
    clone() {
        return new AbstractYao(this.state, this.color)
    }
}

export default AbstractYao
