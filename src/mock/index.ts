import Mock from 'mockjs'
let accountData = Mock.mock({
    'list': [
        {
            'id': '000000000000000000',
            'account': '18229758470',
            'password': 'jchen1420',
        }
    ]
})

// 登录
Mock.mock('/api/account/login', 'post', (options: { body: string }) => {
    let data = {
        status: 200,
        msg: '身份验证成功',
        token: 'testtoken'
    }
    const { account, password } = JSON.parse(options.body)
    accountData.list.forEach((item: { account: any; password: any }) => {
        if(item.account == account) {
            if(item.password != password) {
                data.status = 202
                data.msg = '密码错误，请重新输入'
            }
        } else {
            data.status = 201
            data.msg = '账号不存在，请重新输入'
        }
    })
    return data
})

// 注册
Mock.mock('/api/account/register', 'post', (options: { body: string }) => {
    let data = {
        status: 200,
        msg: '注册成功',
        list: accountData.list
    }
    const { account, password } = JSON.parse(options.body)
    const isExist = accountData.list.findIndex((user: { account: any }) => user.account == account);
    if(isExist == -1) {
        accountData.list.push(Mock.mock({
            'id': '@id()',
            account,
            password
        }))
    } else {
        data.status = 201
        data.msg = '账号已存在，请返回登录'
    }
    return data
})