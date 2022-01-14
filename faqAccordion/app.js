// select elements from the dom
const questions = document.querySelectorAll('.question');

// Loop trhorugh all the elements and add an event listerner to them
questions.forEach((q) =>
	q.addEventListener('click', () => {
		if (q.parentNode.classList.contains('active')) {
			q.parentNode.classList.toggle('active');
		} else {
			questions.forEach((q) => q.parentNode.classList.remove('active'));
			q.parentNode.classList.add('active');
		}
	})
);
