export default class Services{
    getUsers = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!res.ok){
            throw new Error(`Could not fetch` +
            `, received ${res.status}`)
        }
        return await res.json()
    }

    getUserPosts = async (id)=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`,{
            method: 'GET', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!res.ok){
            throw new Error(`Could not fetch` +
            `, received ${res.status}`)
        }
        return await res.json()
    }

    getComments = async (id) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`,{
            method: 'GET', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!res.ok){
            throw new Error(`Could not fetch` +
            `, received ${res.status}`)
        }
        return await res.json()
    }

    getPost = async (id) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'GET', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!res.ok){
            throw new Error(`Could not fetch` +
            `, received ${res.status}`)
        }
        return await res.json()
    }
    getUser = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: 'GET', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if(!res.ok){
            throw new Error(`Could not fetch` +
            `, received ${res.status}`)
        }
        return await res.json()
    }

    editPost = async ({title, body, postId, userId}) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
            id: postId,
            title: title,
            body: body,
            userId: userId
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        if(!res.ok){
            throw new Error(`Could not fetch` +
            `, received ${res.status}`)
        }
        return await res.json()
            
    }

    deletePost = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        })
        if(!res.ok){
            throw new Error(`Could not fetch` +
            `, received ${res.status}`)
        }
    }
}

