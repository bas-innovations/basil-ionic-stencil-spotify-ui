// Helper function for image names
export function dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
        return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
}