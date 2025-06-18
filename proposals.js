// This file exports the array of proposal objects.
// To add a new proposal, just add it to this array.

const proposals = [
    {
        slug: 'linters',
        title: 'Proposal: Linters',
        description: 'An interactive proposal to implement Javascript and Apex linting solutions, improving code quality and boosting developer productivity.',
        htmlContent: `
            `,
        initScript: function() {
            // The entire initScript for the linter proposal goes here
            // ...
        }
    },
    {
        slug: 'new-coffee-machine',
        title: 'Proposal: A Better Coffee Machine',
        description: 'A proposal to improve team morale and productivity by upgrading our ancient coffee machine.',
        htmlContent: `
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-700">
                <header class="text-center mb-16">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">Proposal: A Better Coffee Machine</h1>
                    <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">Improving morale, one cup at a time.</p>
                </header>
                <div class="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <h2 class="text-2xl font-bold text-slate-800 mb-4">The Problem</h2>
                    <p class="text-slate-600">Our current coffee machine is from 1998 and makes a sound like a dying badger. Productivity drops by an estimated 40% every morning as team members weep silently while waiting for their lukewarm, grainy coffee.</p>
                     <h2 class="text-2xl font-bold text-slate-800 mt-8 mb-4">The Solution</h2>
                    <p class="text-slate-600">A new, modern espresso machine that produces high-quality coffee quickly and quietly. The estimated ROI in terms of improved happiness is infinite.</p>
                </div>
            </div>
        `,
        initScript: null // This proposal has no interactive elements
    }
];

// This line makes the data available to our build script
module.exports = proposals;
