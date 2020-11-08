import Yao from './Yao'
import { v4 as uuidv4 } from 'uuid'
import Dict from '../assets/dict'

// 卦类
class Divination {
    /**
     * Constructor
     * 64卦构造函数
     *
     * @param string sixYao 六爻（决定卦）
     *
     * @return null
     */
    constructor(sixYao = '') {
        // 六爻字符串 由10构成
        this.sixYao = sixYao === '' ? this.random() : sixYao
        // 六爻实例数组
        this.sixInstances = this.buildSix()
        // 卦名
        this.name = Dict[this.sixYao].name

        // 六爻组成的卦象图
        // this.word = Dict[sixYao].word

        // 卦辞 爻辞 寓意
        this.description = Dict[this.sixYao].description
    }

    /**
     * BuildSix
     * 构建6个乂实例
     *
     * @return Yao[]
     */
    buildSix() {
        let sixInstances = []
        for (let i = 0, len = this.sixYao.length; i < len; i++) {
            let state = this.sixYao.charAt(i)
            sixInstances[i] = new Yao(state)
        }
        return sixInstances
    }

    /**
     * GetSixInstances
     * <+Description+>
     *
     * @param  <+Comment+>
     *
     * @return <+Return+>
     */
    getSixInstances() {
        return this.sixInstances
    }

    /**
     * GetWord
     * 获取卦象的楷体字url
     *
     * @return url
     */
    getWord() {
        return this.word
    }

    /**
     * GetName
     * 获取卦名
     *
     * @return name
     */
    getName() {
        return this.name
    }

    /**
     * GetDescription
     * 获取卦的分析
     *
     * @return description
     */
    getDescription() {
        return this.description
    }

    /**
     * Random
     * 随机生成6位字符串
     * 以便确定64卦中的一卦
     *
     * @return string
     */
    random() {
        let ret = ''
        for (let i = 0, len = 6; i < len; i++) {
            let r = parseInt(uuidv4().charAt(12), 16) % 2
            ret += r
        }
        return ret
    }
}
export default Divination
