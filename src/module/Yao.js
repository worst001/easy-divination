import YangYao from './YangYao'
import YingYao from './YingYao'

// 乂类（状态模式）
class Yao {
  /**
   * Constructor
   * 构造乂
   *
   * @param state <+Comment+>
   *
   * @return null
   */
  constructor(state) {
    // 当前乂真正的实例（阴或阳）
    this.instance = ''
    switch (state) {
      // 构造阳爻
      case '1':
        this.instance = new YangYao().clone()
        break
      // 构造阴爻
      case '0':
        this.instance = new YingYao().clone()
        break
      default:
    }
  }

  /**
   * GetInstance
   * <+Description+>
   *
   * @param  <+Comment+>
   *
   * @return <+Return+>
   */
  getInstance() {
    return this.instance
  }

  /**
   * Print
   * 勾画乂图
   *
   * @return null
   */
  print() {
    this.instance.print()
  }
}

export default Yao
