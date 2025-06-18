document.addEventListener('DOMContentLoaded', () => {

    /**
     * PROPOSAL DATABASE
     * To add a new proposal, simply add a new object to this array.
     * - slug: A unique URL-friendly identifier.
     * - title: The full title of the proposal for display.
     * - htmlContent: The complete HTML body of the proposal.
     * - initScript: A function containing any JavaScript needed for that specific proposal to run.
     */
    const proposals = [
        {
            slug: 'linters',
            title: 'Proposal: Linters',
            htmlContent: `
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <style>
                        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; /* slate-50 */ }
                        .highlight-blue { color: #2563eb; } .highlight-green { color: #16a34a; }
                        .bg-custom-blue { background-color: #3b82f6; } .bg-custom-green { background-color: #22c55e; }
                        .card { background-color: white; border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); transition: all 0.3s ease-in-out; }
                        .card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1); }
                        input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 8px; background: #e2e8f0; border-radius: 5px; outline: none; }
                        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; background: #3b82f6; cursor: pointer; border-radius: 50%; }
                        input[type="range"]::-moz-range-thumb { width: 20px; height: 20px; background: #3b82f6; cursor: pointer; border-radius: 50%; }
                        .chart-container { position: relative; width: 100%; max-width: 400px; margin-left: auto; margin-right: auto; height: 300px; max-height: 400px; }
                        @media (min-width: 768px) { .chart-container { height: 350px; } }
                    </style>
                    <body class="text-slate-700">
                        <header class="text-center mb-16">
                            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">Proposal: Linters</h1>
                            <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">An interactive proposal to implement Javascript and Apex linting solutions, improving code quality and boosting developer productivity.</p>
                        </header>
                        <section id="dashboard" class="mb-20">
                            <h2 class="text-3xl font-bold text-center text-slate-800 mb-2">Projected Annual Savings</h2>
                            <p class="text-center text-slate-500 mb-8">Based on baseline estimates. Use the interactive calculator below to adjust.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                <div class="card p-6 text-center"><div class="text-6xl font-extrabold highlight-green mb-2" id="total-savings-display-card">$49,501</div><h3 class="text-xl font-bold text-slate-800">Total Estimated Savings</h3><p class="text-slate-500">From reduced rework and faster code reviews.</p></div>
                                <div class="card p-6 text-center"><div class="text-6xl font-extrabold highlight-blue mb-2" id="hours-saved-display-card">1,026</div><h3 class="text-xl font-bold text-slate-800">Developer Hours Saved</h3><p class="text-slate-500">Time reclaimed for innovation and feature development.</p></div>
                            </div>
                        </section>
                        <section id="quality-pyramid" class="mb-20 py-12 bg-white rounded-lg shadow-inner">
                            <div class="text-center mb-12"><h2 class="text-3xl font-bold text-slate-800">Our Quality Strategy Pyramid</h2><p class="mt-2 text-lg text-slate-600 max-w-3xl mx-auto">This pyramid illustrates our layered approach to ensuring code quality, highlighting where each method fits in terms of cost-effectiveness and impact.</p></div>
                            <div class="flex flex-col items-center justify-center max-w-lg mx-auto"><div class="w-2/5 md:w-1/3 bg-red-400 text-white font-semibold text-lg py-4 px-6 text-center rounded-t-lg shadow-lg mb-2">Manual Testing</div><div class="w-3/5 md:w-2/3 bg-yellow-500 text-white font-semibold text-lg py-4 px-6 text-center shadow-lg mb-2">Automated Testing</div><div class="w-4/5 md:w-5/6 bg-blue-500 text-white font-semibold text-lg py-4 px-6 text-center shadow-lg mb-2">Code Review</div><div class="w-full bg-green-600 text-white font-bold text-xl py-6 px-8 text-center rounded-b-lg shadow-lg">Linting</div></div>
                            <p class="text-center text-slate-600 mt-6 max-w-3xl mx-auto">As the base of our pyramid, Linting represents the most efficient and early way to catch issues, significantly reducing the need for more costly testing methods higher up the pyramid. It's about shifting quality left.</p>
                        </section>
                        <section id="solution" class="mb-20 py-12 bg-white rounded-lg shadow-inner">
                            <div class="text-center mb-12"><h2 class="text-3xl font-bold text-slate-800">Our Proposed Solution</h2><p class="mt-2 text-lg text-slate-600 max-w-3xl mx-auto">By integrating automated linters directly into our workflow, we catch issues before they become problems.</p></div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div class="px-6"><h3 class="text-xl font-bold text-slate-800 mb-4 text-center">A Lightweight, Automated Process</h3><div class="flex flex-col items-center space-y-4"><div class="w-full card p-4 text-center"><span class="font-semibold">1. Developer writes code</span></div><div class="text-2xl text-slate-400">↓</div><div class="w-full card p-4 text-center border-2 border-blue-500"><span class="font-semibold text-blue-600">2. Linter automatically checks standards in IDE & CI</span><p class="text-sm text-slate-500 mt-1">Catches i18n issues, style errors, and potential bugs.</p></div><div class="text-2xl text-slate-400">↓</div><div class="w-full card p-4 text-center border-2 border-green-500"><span class="font-semibold text-green-600">3. High-quality code is reviewed & merged</span><p class="text-sm text-slate-500 mt-1">Fewer review comments, faster approvals.</p></div></div></div><div class="px-6"><h3 class="text-xl font-bold text-slate-800 mb-4 text-center">Mandating Best Practices</h3><p class="text-center text-slate-600 mb-4">For example, a linter can enforce the use of translatable labels over hardcoded strings, preventing internationalization defects.</p><div class="bg-slate-800 rounded-lg p-4 font-mono text-sm text-white"><pre><code><span class="text-red-400">// Linter flags this as an error 👎</span>\n<span class="text-slate-400">const title = 'User Profile';</span>\n\n<span class="text-green-400">// Linter suggests this as the correct approach 👍</span>\n<span class="text-slate-400">import UserProfileLabel from '@salesforce/label/c.UserProfile';</span>\n<span class="text-slate-400">const title = UserProfileLabel;</span></code></pre></div></div></div>
                        </section>
                        <section id="calculator" class="mb-20">
                            <div class="text-center mb-12"><h2 class="text-3xl font-bold text-slate-800">Interactive ROI Calculator</h2><p class="mt-2 text-lg text-slate-600 max-w-3xl mx-auto">Adjust the sliders to see how linting can impact our bottom line based on different assumptions.</p></div>
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"><div class="lg:col-span-2 space-y-6 card p-8"><div><label for="pr-comments-reduced-slider" class="font-semibold">PR Comments Reduced (per PR)</label><div class="flex items-center space-x-4"><input id="pr-comments-reduced-slider" type="range" min="1" max="15" value="5" class="w-full"><span class="font-bold text-blue-600 w-12 text-center" id="pr-comments-reduced-value">5</span></div></div><div><label for="minutes-per-comment-slider" class="font-semibold">Minutes Spent Per PR Comment</label><div class="flex items-center space-x-4"><input id="minutes-per-comment-slider" type="range" min="0" max="15" value="10" step="1" class="w-full"><span class="font-bold text-blue-600 w-16 text-center" id="minutes-per-comment-value">10 mins</span></div></div><div><label for="dev-day-cost-slider" class="font-semibold">Avg. Dev Day Cost</label><div class="flex items-center space-x-4"><input id="dev-day-cost-slider" type="range" min="200" max="600" value="366" step="1"><span class="font-bold text-blue-600 w-16 text-center" id="dev-day-cost-value">$366</span></div></div><div><label for="i18n-bugs-slider" class="font-semibold">I18n Bugs Reduced (annually)</label><div class="flex items-center space-x-4"><input id="i18n-bugs-slider" type="range" min="1" max="20" value="5"><span class="font-bold text-blue-600 w-12 text-center" id="i18n-bugs-value">5</span></div></div><div><label for="pr-count-slider" class="font-semibold">Total PRs per Month</label><div class="flex items-center space-x-4"><input id="pr-count-slider" type="range" min="50" max="300" value="100" step="10"><span class="font-bold text-blue-600 w-12 text-center" id="pr-count-value">100</span></div></div></div><div class="card p-6 text-center"><h3 class="text-xl font-bold text-slate-800 mb-4">Annual Savings Breakdown</h3><div class="chart-container mb-4"><canvas id="savingsChart"></canvas></div><div class="text-2xl font-bold text-slate-700">Total: <span class="highlight-green" id="total-savings-display-calc">$49,501</span></div></div></div>
                        </section>
                        <section id="benefits" class="mb-20 py-12 bg-white rounded-lg shadow-inner">
                            <div class="text-center mb-12"><h2 class="text-3xl font-bold text-slate-800">Beyond the Numbers: A Culture of Quality</h2><p class="mt-2 text-lg text-slate-600">The benefits extend beyond direct cost savings, fostering a more robust and maintainable codebase.</p></div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"><div class="text-center p-4"><div class="text-4xl mb-3">📖</div><h3 class="text-lg font-semibold text-slate-800">Improved Code Legibility</h3><p class="text-slate-500">Consistent standards make code easier to read, understand, and maintain.</p></div><div class="text-center p-4"><div class="text-4xl mb-3">📉</div><h3 class="text-lg font-semibold text-slate-800">Reduced Technical Debt</h3><p class="text-slate-500">Catching small issues early prevents them from compounding into larger problems.</p></div><div class="text-center p-4"><div class="text-4xl mb-3">🚀</div><h3 class="font-bold">Faster Onboarding</h3><p class="text-slate-500">New developers get immediate feedback, helping them adapt to our standards quickly.</p></div></div>
                        </section>
                        <section id="roadmap" class="mb-20">
                            <div class="text-center mb-12"><h2 class="text-3xl font-bold text-slate-800">Our Implementation Roadmap</h2><p class="mt-2 text-lg text-slate-600">A phased approach to ensure smooth adoption and continuous improvement.</p></div>
                            <div class="relative max-w-4xl mx-auto"><div class="hidden md:block absolute top-5 left-0 h-1 w-full bg-slate-200"></div><div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative"><div class="card p-6"><div class="flex items-center justify-center h-10 w-10 rounded-full bg-custom-blue text-white font-bold text-lg mx-auto mb-4">1</div><h3 class="font-bold">Rule Definition & Development</h3><p class="text-sm text-slate-500">Revise existing npm package and PMD ruleset to include critical rules - content TBD by tech leads.</p></div><div class="card p-6"><div class="flex items-center justify-center h-10 w-10 rounded-full bg-custom-blue text-white font-bold text-lg mx-auto mb-4">2</div><h3 class="font-bold">Tooling Integration</h3><p class="text-sm text-slate-500">Integrate the linting tools into our CI/CD pipelines to ensure changed files (not all files) adhere to our standards.</p></div><div class="card p-6"><div class="flex items-center justify-center h-10 w-10 rounded-full bg-custom-blue text-white font-bold text-lg mx-auto mb-4">3</div><h3 class="font-bold">Team Adoption & Training</h3><p class="text-sm text-slate-500">Gradual rollout with willing teams (Foo Fighters, RHCP included).</p></div><div class="card p-6"><div class="flex items-center justify-center h-10 w-10 rounded-full bg-custom-blue text-white font-bold text-lg mx-auto mb-4">4</div><h3 class="font-bold">Iterative Refinement</h3><p class="text-sm text-slate-500">Make technical leads Github Code Owners for the linting files, and open the rulesets up to PRs by any team member.</p></div></div></div>
                        </section>
                    </body>
                </div>
            `,
            initScript: function() {
                // NOTE: This is the script from your original file, wrapped in a function.
                const sliders = {
                    prCommentsReduced: document.getElementById('pr-comments-reduced-slider'),
                    minutesPerComment: document.getElementById('minutes-per-comment-slider'), 
                    devDayCost: document.getElementById('dev-day-cost-slider'),
                    i18nBugs: document.getElementById('i18n-bugs-slider'),
                    prCount: document.getElementById('pr-count-slider')
                };
                const values = {
                    prCommentsReduced: document.getElementById('pr-comments-reduced-value'),
                    minutesPerComment: document.getElementById('minutes-per-comment-value'), 
                    devDayCost: document.getElementById('dev-day-cost-value'),
                    i18nBugs: document.getElementById('i18n-bugs-value'),
                    prCount: document.getElementById('pr-count-value')
                };
                const display = {
                    totalSavingsCard: document.getElementById('total-savings-display-card'),
                    hoursSavedCard: document.getElementById('hours-saved-display-card'),
                    totalSavingsCalc: document.getElementById('total-savings-display-calc')
                };
                const ctx = document.getElementById('savingsChart').getContext('2d');
                let savingsChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['PR Review Savings', 'Bug Reduction Savings'],
                        datasets: [{ data: [0, 0], backgroundColor: ['#3b82f6', '#22c55e'], borderColor: '#f8fafc', borderWidth: 4 }]
                    },
                    options: {
                        responsive: true, maintainAspectRatio: false, cutout: '70%',
                        plugins: {
                            legend: { position: 'bottom' },
                            tooltip: { callbacks: { label: (context) => `${context.label || ''}: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed)}` } }
                        }
                    }
                });
                function calculateAndDisplay() {
                    const commentsReduced = parseFloat(sliders.prCommentsReduced.value), minutesPerComment = parseFloat(sliders.minutesPerComment.value), devDayCost = parseFloat(sliders.devDayCost.value), i18nBugsReducedAnnually = parseFloat(sliders.i18nBugs.value), prsPerMonth = parseFloat(sliders.prCount.value);
                    const devHourCost = devDayCost / 8, timePerCommentHours = minutesPerComment / 60;
                    const annualPrSavings = (commentsReduced * timePerCommentHours * prsPerMonth * devHourCost) * 12;
                    const annualBugSavings = i18nBugsReducedAnnually * devDayCost;
                    const totalAnnualSavings = annualPrSavings + annualBugSavings;
                    const totalHoursSaved = ((commentsReduced * timePerCommentHours * prsPerMonth) * 12) + (i18nBugsReducedAnnually * 8);
                    values.prCommentsReduced.textContent = commentsReduced;
                    values.minutesPerComment.textContent = `${minutesPerComment} mins`;
                    values.devDayCost.textContent = `$${devDayCost}`;
                    values.i18nBugs.textContent = i18nBugsReducedAnnually;
                    values.prCount.textContent = prsPerMonth;
                    const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
                    display.totalSavingsCard.textContent = formatCurrency(totalAnnualSavings);
                    display.hoursSavedCard.textContent = new Intl.NumberFormat('en-US').format(Math.round(totalHoursSaved));
                    display.totalSavingsCalc.textContent = formatCurrency(totalAnnualSavings);
                    savingsChart.data.datasets[0].data = [annualPrSavings, annualBugSavings];
                    savingsChart.update();
                }
                Object.values(sliders).forEach(slider => slider.addEventListener('input', calculateAndDisplay));
                calculateAndDisplay();
            }
        },
        // {
        //   slug: 'another-proposal',
        //   title: 'Proposal: New Coffee Machine',
        //   htmlContent: `<h1>Proposal for a new coffee machine...</h1>`,
        //   initScript: function() { console.log('Coffee proposal loaded!'); }
        // }
    ];

    // --- SPA ROUTER AND RENDERER ---
    const navContainer = document.getElementById('proposal-nav');
    const contentContainer = document.getElementById('proposal-content');

    function renderApp() {
        const params = new URLSearchParams(window.location.search);
        const currentSlug = params.get('proposal');

        // Populate navigation
        navContainer.innerHTML = ''; // Clear existing nav
        proposals.forEach(p => {
            const link = document.createElement('a');
            link.href = `?proposal=${p.slug}`;
            link.textContent = p.title;
            link.className = 'nav-link';
            if (p.slug === currentSlug) {
                link.classList.add('active');
            }
            navContainer.appendChild(link);
        });

        // Find the proposal to display
        const proposalToDisplay = proposals.find(p => p.slug === currentSlug);

        if (proposalToDisplay) {
            // Render the selected proposal
            document.title = proposalToDisplay.title;
            contentContainer.innerHTML = proposalToDisplay.htmlContent;
            // IMPORTANT: Run the proposal's specific script after its HTML is in the DOM
            if (proposalToDisplay.initScript && typeof proposalToDisplay.initScript === 'function') {
                proposalToDisplay.initScript();
            }
        } else {
            // Render a default home page
            document.title = 'Work Proposals';
            contentContainer.innerHTML = `
                <div class="flex items-center justify-center h-full text-center text-slate-600">
                    <div>
                        <h2 class="text-4xl font-bold mb-4">Welcome</h2>
                        <p class="text-xl">Please select a proposal from the navigation menu on the left.</p>
                    </div>
                </div>
            `;
        }
    }

    // Initial render on page load
    renderApp();
});
