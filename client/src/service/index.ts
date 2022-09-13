import server from '../utils/request'

function getPoemList() {
    return server({
        url: '/api/poem_list',
        method: 'get'
    })
}

function addPoem(data: any) {
    return server({
        url: '/api/add_poem',
        method: 'post',
        data
    })
}

export {
    getPoemList,
    addPoem
}