export function toFahrenheit(input) {
    if (!input) return;
    const num = parseInt(input);
    const fahrenheit = (num - 273.15) * 1.8 + 32;
    return fahrenheit.toFixed(0);
}
export function capitalize(input) {
    const str = input.trim();
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
