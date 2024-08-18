export const fetchAdvice = async () => {
    const url = `https://api.adviceslip.com/advice?v=${new Date().getTime()}`;

    try {
       const response = await fetch(url);
 
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error(error.message);

        return 'There is no advice for you today';
    }
}