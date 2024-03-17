function parseElement(element) {
    const questions = [];
    const items = element.querySelectorAll('.List__ItemProblem-sc-5g3rq0-4');

    items.forEach(item => {
        const titleElement = item.querySelector('a');
        const tags = item.querySelectorAll('.Tag-sc-1klb2b4-0');

        const question = {
            title: titleElement.textContent.trim(),
            tags: Array.from(tags).map(tag => tag.textContent.trim())
        };

        questions.push(question);
    });

    return questions;
}

const element = document.querySelector('.List__ListItems-sc-5g3rq0-1');
let questions = parseElement(element);
questions = questions.reverse();