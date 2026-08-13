
// This function creates an HTML element with the specified tag and optional attributes.
/**
 * 
 * @param tag - The tag name of the HTML element to create (e.g., 'div', 'span', 'p').
 * @param attributes - An optional object containing key-value pairs of attributes to set on the created element (e.g., { id: 'myDiv', class: 'myClass' }).
 * @returns HTMLElement
 */
export default function element(tag: string, attributes?: { [key: string]: string }): HTMLElement
{
    const el = document.createElement(tag);

    if (attributes)
    {
        for (const [key, value] of Object.entries(attributes))
        {
            el.setAttribute(key, value);
        }
    }

    return el;
}