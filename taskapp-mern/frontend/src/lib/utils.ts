export default function formatDate(date : Date | string | number) : string {
    const d = new Date(date);

    if(isNaN(d.getTime())) {
        return "Invalid date";
    }

    return d.toLocaleDateString('id-ID', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}