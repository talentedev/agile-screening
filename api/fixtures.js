const AppDAO = require('./dao/AppDao');
const PrincipleRepository = require('./dao/PrincipleRepository');
const ValueRepository = require('./dao/ValueRepository');

// Create DB
const dao = new AppDAO('./database.sqlite3')
const valueRepo = new ValueRepository(dao)
const principleRepo = new PrincipleRepository(dao)
valueRepo.createTable()
principleRepo.createTable()

// populate data
valueRepo.create('individuals and interactions over processes and tools;')
valueRepo.create('individuals and interactions over processes and tools;')
valueRepo.create('individuals and interactions over processes and tools;')
valueRepo.create('individuals and interactions over processes and tools;')

principleRepo.create('Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.')
principleRepo.create('Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.')
principleRepo.create('Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.')
principleRepo.create('Business people and developers must work together daily throughout the project.')
principleRepo.create('Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.')
principleRepo.create('The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.')
principleRepo.create('Working software is the primary measure of progress.')
principleRepo.create('Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.')
principleRepo.create('Continuous attention to technical excellence and good design enhances agility.')
principleRepo.create('Simplicity–the art of maximizing the amount of work not done–is essential.')
principleRepo.create('The best architectures, requirements, and designs emerge from self-organizing teams.')
principleRepo.create('At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.')

