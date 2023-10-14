const uploadToImgbb = async (img) => {
    const form = new FormData()
    form.append('image', img)

    const url = `${process.env.NEXT_PUBLIC_IMGBB_URL}?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`


    const config = {
        method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Connection': 'keep-alive',
        //     'Content-Type': 'application/json',
        // },
        body: form
    }

    const response = await fetch(url, config)
    const data = await response.json()

    return data
}

export default uploadToImgbb