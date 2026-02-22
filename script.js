let currentTab = 'all';

function getCards() {
    return document.querySelectorAll('.job-card');
}
function updateDashboard() {
    const cards = getCards();
    let total = cards.length
    let interview = 0;
    let rejected = 0

    cards.forEach(card => {
        if (card.dataset.status === 'interview') interview++;
        if (card.dataset.status === 'rejected') rejected++
    });

    document.getElementById('total-count').innerText = total;
    document.getElementById('interview-count').innerText = interview
    document.getElementById('rejected-count').innerText = rejected;
}
function filterCards() {
    const cards = getCards();
    let visibleCount = 0;

    cards.forEach(card => {
        if (currentTab === 'all' || card.dataset.status === currentTab) {
            card.classList.remove("hidden")
            visibleCount++;
        } else {
            card.classList.add("hidden")
        }
    });
    document.getElementById('tab-count').innerText = visibleCount;

    const noJobs = document.getElementById('no-jobs');
    visibleCount === 0 ? noJobs.classList.remove("hidden") : noJobs.classList.add("hidden")
}
document.addEventListener("click", function (e) {

    if (e.target.classList.contains('tab-btn')) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('border-blue-500');
            btn.classList.add('text-gray-500');
        });
        e.target.classList.add("border-blue-500");
        e.target.classList.remove("text-gray-500");

        currentTab = e.target.dataset.tab;
        filterCards()
        return;
    }

    const card = e.target.closest('.job-card');
    if (!card) return
    const badge = card.querySelector('.status-badge');

    if (e.target.classList.contains('interview-btn')) {
        card.dataset.status = 'interview';
        badge.innerText = 'INTERVIEW'
        badge.className = 'status-badge inline-block bg-green-200 text-green-600 text-[14px] font-[600] px-2 py-1 rounded mt-2';
    }
    if (e.target.classList.contains("reject-btn")) {
        card.dataset.status = "rejected";
        badge.innerText = "REJECTED"
        badge.className = "status-badge inline-block bg-red-200 text-red-600 text-[14px]   font-[600] px-2 py-1 rounded mt-2";
    }

    if (e.target.classList.contains("delete-btn")) {
        card.remove();
    }

    updateDashboard();
    filterCards()
});

updateDashboard()

filterCards()
