export const getTomorrowsDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const day = tomorrow.getUTCDate();
    const month = tomorrow.getUTCMonth() + 1;
    const year = tomorrow.getUTCFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
}


export const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}


export const convertToISOString = (date, time) => {
    const dateParts = date.split('-');
    const timeParts = time.split(':');

    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10);
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    const formattedDate = new Date(Date.UTC(year, month, day, hours, minutes, 0));

    return formattedDate.toISOString();
}

