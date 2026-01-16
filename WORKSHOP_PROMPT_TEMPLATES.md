# Claude Code Prompt Template Library
**Print Format:** 2-page reference guide

Ready-to-use prompt templates for common development tasks

---

## PAGE 1: COMMON DEVELOPMENT TASKS

### Template 1: CRUD API Endpoint

```markdown
Build a complete CRUD API for [RESOURCE_NAME].

Endpoints:
- GET /api/[resource] - List with pagination and filtering
- GET /api/[resource]/:id - Get single item by ID
- POST /api/[resource] - Create new item
- PUT /api/[resource]/:id - Update existing item
- DELETE /api/[resource]/:id - Delete item

Requirements:
- Input validation using Zod schemas
- Error handling with our ErrorHandler middleware
- TypeScript types for all interfaces
- Unit tests for business logic
- Integration tests for endpoints
- Follow our REST API patterns (see examples in src/routes/)
- Rate limiting: 100 requests/minute per user
- OpenAPI/Swagger documentation

Context:
- Tech stack: [Express/FastAPI/NestJS]
- Database: [PostgreSQL/MongoDB/etc]
- ORM: [Prisma/TypeORM/Mongoose]
- Authentication: [JWT/OAuth/etc]

Success Criteria:
- All tests pass
- API documentation auto-generated
- Follows existing code patterns
- Handles edge cases (404, validation errors, etc.)

Example Response Format:
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

**Use this for:** Creating new REST API endpoints

---

### Template 2: Authentication System

```markdown
Implement user authentication with JWT tokens.

Requirements:
Endpoints:
- POST /auth/login (email, password) → returns access + refresh tokens
- POST /auth/register (email, password, name) → creates user + returns tokens
- POST /auth/refresh (refresh_token) → returns new access token
- POST /auth/logout (refresh_token) → invalidates refresh token

Security:
- Password hashing with bcrypt (cost factor 12)
- Access token expiry: 15 minutes
- Refresh token expiry: 7 days
- Store refresh tokens in database with user association
- Implement token rotation on refresh
- Include user ID and role in JWT payload
- Rate limiting: 5 login attempts per 15 minutes per IP address

Validation:
- Email format validation
- Password strength: min 8 chars, 1 uppercase, 1 lowercase, 1 number
- Sanitize all inputs

Testing:
- Success cases (valid login, registration, refresh)
- Failure cases (wrong password, expired token, rate limit)
- Edge cases (already registered email, invalid token format)

Context:
- Current auth: [Basic/None/Session-based - describe current state]
- Database: [PostgreSQL with Prisma]
- Framework: [Express + TypeScript]
- Existing middleware: [List auth middleware if any]

Constraints:
- Maintain backward compatibility with existing sessions (if applicable)
- Support zero-downtime deployment
- No breaking changes to public API

Success Criteria:
- Can login/register/refresh successfully
- Rate limiting blocks brute force attempts
- Tokens expire correctly
- Tests cover all scenarios
- Documentation includes auth flow diagram
- Follows OWASP security best practices
```

**Use this for:** Adding authentication to your application

---

### Template 3: Bug Fix

```markdown
Fix bug: [CONCISE DESCRIPTION OF BUG]

Reproduction Steps:
1. [Step 1 - be specific]
2. [Step 2]
3. [Step 3]
4. Observe: [What goes wrong]

Expected Behavior:
[Describe what should happen]

Actual Behavior:
[Describe what actually happens]

Error Messages (if any):
[Paste complete error message/stack trace]

Related Files:
- [file1.ts] - [why it's relevant]
- [file2.ts] - [why it's relevant]

Context:
- This started happening after: [recent change/deployment/date]
- Affects: [which users/environments/features]
- Frequency: [always/sometimes/rare]
- Environment: [production/staging/dev]

Investigation Done:
- [What you've already tried]
- [What you've ruled out]

Requirements:
- Fix the root cause (not just symptoms)
- Add regression test that fails on old code, passes on fix
- Ensure no side effects in related functionality
- Update documentation if behavior changes
- Add logging if issue could reoccur silently

Success Criteria:
- Bug is no longer reproducible following reproduction steps
- Test suite includes regression test
- No new test failures introduced
- Related functionality still works
- Code review passes
```

**Use this for:** Fixing bugs systematically

---

### Template 4: Feature Addition to Existing System

```markdown
Add [FEATURE_NAME] to our [SYSTEM_NAME].

Current Implementation:
[Brief description of how the system currently works]
- Current behavior: [describe]
- Current architecture: [describe]
- Current limitations: [what doesn't it do]

New Feature Requirements:
[Detailed description of what needs to be added]

Functional Requirements:
- [Requirement 1 - what it should do]
- [Requirement 2]
- [Requirement 3]

Non-Functional Requirements:
- Performance: [targets - e.g., response time <100ms]
- Scalability: [targets - e.g., handle 1000 concurrent users]
- Reliability: [targets - e.g., 99.9% uptime]

Context:
- Existing patterns: [service layer, repository pattern, etc.]
- Tech stack: [languages, frameworks, libraries]
- Related systems: [integrations that will be affected]
- Database schema: [relevant tables/collections]

Integration Points:
- [System A] - [how it integrates]
- [System B] - [how it integrates]

Requirements:
- Maintain backward compatibility
- Follow existing code style and patterns
- Add comprehensive tests (unit + integration)
- Update relevant documentation
- Consider performance impact on existing features
- Handle migration for existing data (if applicable)

Constraints:
- No breaking changes to public API
- Deploy with zero downtime
- Must work with existing authentication/authorization
- Stay within [budget/resource] limits

Success Criteria:
- Feature works as specified
- All existing tests still pass
- New tests cover new functionality
- Performance metrics maintained or improved
- Documentation updated
- Backward compatible
```

**Use this for:** Extending existing features

---

### Template 5: Database Migration

```markdown
Create database migration for [DESCRIPTION].

Schema Changes:
Tables to Create:
- [table_name]:
  - [column]: [type] [constraints] - [description]
  - [column]: [type] [constraints] - [description]

Tables to Modify:
- [table_name]:
  - Add column: [column] [type] [constraints]
  - Modify column: [column] [old type] → [new type]
  - Remove column: [column] (deprecated since [date])

Indexes:
- [table].[column(s)] - [btree/hash] - [reason for index]
- [table].[column(s)] - [btree/hash] - [reason for index]

Relationships:
- [table1].[column] → [table2].[column] - [ON DELETE CASCADE/SET NULL]

Data Migration:
- Existing data transformation: [describe]
- Default values for new columns: [specify]
- Data validation: [describe checks]

Requirements:
- Write both UP and DOWN migrations
- Ensure migration is idempotent (can run multiple times)
- Test migration on copy of production data
- Include data validation checks
- Estimate migration time for production data volume
- Plan for rollback if migration fails

Context:
- Database: [PostgreSQL 15/MySQL 8/MongoDB 6]
- Migration tool: [Prisma/TypeORM/Alembic/Flyway]
- Production data volume: [X million rows]
- Acceptable downtime: [none/X minutes]

Performance Considerations:
- Index creation strategy: [CONCURRENTLY/offline]
- Large table handling: [batching/chunking strategy]
- Lock duration: [minimize table locks]

Success Criteria:
- Migration runs successfully on dev/staging
- Rollback works correctly
- No data loss
- Performance impact acceptable
- Documentation includes migration notes
- Estimated production migration time documented
```

**Use this for:** Database schema changes

---

## PAGE 2: ADVANCED TASKS & ADVERSARIAL REVIEW

### Template 6: Performance Optimization

```markdown
Optimize [FUNCTIONALITY] for better performance.

Current Performance:
- Metric 1: [current value] (e.g., response time: 800ms)
- Metric 2: [current value] (e.g., queries per request: 15)
- Metric 3: [current value] (e.g., memory usage: 200MB)
- Issue: [specific problem - e.g., N+1 query pattern, inefficient algorithm]

Target Performance:
- Metric 1: [target value] (e.g., response time: <100ms)
- Metric 2: [target value] (e.g., queries per request: <3)
- Metric 3: [target value] (e.g., memory usage: <50MB)
- Improvement: [X% faster/cheaper/more efficient]

Analysis Required:
- Profile current implementation
- Identify bottlenecks
- Analyze database query patterns
- Check for N+1 query problems
- Review algorithm complexity
- Assess caching opportunities
- Evaluate resource usage (CPU, memory, I/O)
- Check network call efficiency

Optimization Strategies:
Database:
- Reduce number of queries (eager loading, joins)
- Add missing indexes
- Optimize query structure
- Implement query result caching

Code:
- Algorithm improvements (O(n²) → O(n))
- Remove unnecessary computations
- Optimize loops and iterations
- Use appropriate data structures

Caching:
- Application-level caching (Redis/Memcached)
- Query result caching
- Cache invalidation strategy
- TTL configuration

Architecture:
- Async/parallel processing
- Lazy loading where appropriate
- CDN for static assets
- Database read replicas

Context:
- Current implementation: [brief description]
- Scale: [requests/day, data size, concurrent users]
- Tech stack: [frameworks, database, cache]
- Constraints: [must maintain functionality, backward compatible]

Requirements:
- Maintain all existing functionality
- Add performance tests/benchmarks
- Document optimization approach and trade-offs
- Consider edge cases and error scenarios
- Ensure thread safety (if concurrent)

Testing:
- Benchmark before and after
- Load testing with realistic data
- Verify correctness not compromised
- Test edge cases still handled

Success Criteria:
- Meets or exceeds target performance metrics
- All existing tests still pass
- New performance tests verify improvements
- No functionality lost or broken
- Documentation explains optimizations
```

**Use this for:** Performance improvements

---

### Template 7: Refactoring

```markdown
Refactor [COMPONENT/MODULE] to [GOAL].

Current State:
- Code location: [file paths]
- Current architecture: [describe structure]
- Problems:
  - [Problem 1 - e.g., high complexity, tight coupling]
  - [Problem 2 - e.g., code duplication]
  - [Problem 3 - e.g., hard to test]
- Technical debt: [describe]

Target State:
- Desired architecture: [describe new structure]
- Improvements:
  - [Improvement 1 - e.g., separation of concerns]
  - [Improvement 2 - e.g., testability]
  - [Improvement 3 - e.g., reusability]
- Benefits: [why this refactoring matters]

Refactoring Strategy:
- Pattern to apply: [e.g., Extract Method, Introduce Layer, etc.]
- Breaking up: [which parts split into separate modules/classes]
- Consolidating: [what to combine]
- Dependencies: [how to handle]

Requirements:
- Maintain all existing functionality (behavior identical)
- Preserve public API (no breaking changes)
- Update tests to reflect new structure
- All tests must pass before and after
- Improve code quality metrics (complexity, coupling)
- Better error handling (if applicable)

Context:
- This code is used by: [list dependencies]
- Current test coverage: [X%]
- Known issues: [bugs, limitations]

Constraints:
- No breaking changes
- No change in external behavior
- Maintain backward compatibility
- Deploy incrementally if possible

Approach:
1. Ensure comprehensive test coverage exists
2. Refactor incrementally (small steps)
3. Run tests after each step
4. Update tests as structure changes
5. Update documentation

Success Criteria:
- All functionality preserved
- Tests pass (ideally coverage improved)
- Code quality metrics improved
- Easier to understand and maintain
- Better structure for future changes
- Documentation updated
```

**Use this for:** Code refactoring

---

### Template 8: Integration with External Service

```markdown
Integrate with [EXTERNAL_SERVICE] for [PURPOSE].

External Service Details:
- Service: [name]
- Documentation: [URL]
- API Version: [version]
- Authentication: [API key/OAuth/etc.]
- Rate Limits: [requests/min, daily limits]
- Pricing: [cost per request, tiers]

Integration Requirements:
Functionality Needed:
- [Feature 1 - specific API endpoints to use]
- [Feature 2]
- [Feature 3]

Data Flow:
- Input: [what data we send]
- Output: [what data we receive]
- Transformation: [how to map our data to theirs]

Error Handling:
- Network errors (timeout, connection failed)
- API errors (rate limit, auth failed, server error)
- Validation errors (invalid input)
- Retry strategy: [exponential backoff, max retries]
- Fallback behavior: [what to do if service unavailable]

Implementation:
- Create service layer/client for external API
- Environment-specific configuration (dev, staging, prod)
- Secure credential storage (env vars, secrets manager)
- Request/response logging (sanitize sensitive data)
- Timeout configuration: [reasonable timeout]
- Circuit breaker pattern (if critical)

Testing:
- Mock external service for unit tests
- Integration tests with test/sandbox environment
- Error scenario testing (network failure, API errors)
- Rate limit handling test
- Performance test (latency impact)

Monitoring:
- Log all API calls (request ID, status, latency)
- Alert on error rates >X%
- Track API usage (stay within limits)
- Monitor costs

Context:
- Use case: [why we need this integration]
- Frequency: [how often we'll call API]
- Criticality: [can system work without it?]
- Data sensitivity: [PII, secrets, etc.]

Constraints:
- Stay within rate limits
- Stay within budget ([cost])
- Handle service downtime gracefully
- Comply with their terms of service

Success Criteria:
- Successfully calls API in all scenarios
- Proper error handling and retry logic
- Secrets secured properly
- Tests cover success and failure cases
- Monitoring and alerting in place
- Documentation includes integration guide
```

**Use this for:** External API integrations

---

### Template 9: Adversarial Code Review Prompt

```markdown
You are a senior security and code quality reviewer with an adversarial mindset.
Your job is to FIND PROBLEMS, not validate code.

Analyze the following code critically:

[PASTE CODE HERE]

Review for:

1. SECURITY VULNERABILITIES
   Critical Issues:
   - SQL injection (string interpolation in queries)
   - XSS attacks (unescaped user input in HTML)
   - CSRF vulnerabilities (missing tokens)
   - Authentication bypasses (logic flaws)
   - Authorization gaps (missing permission checks)
   - Data exposure (sensitive data in logs, responses)
   - Secrets in code (API keys, passwords hardcoded)
   - OWASP Top 10 issues

   Check:
   - Input validation (all user inputs validated?)
   - Output encoding (all outputs escaped?)
   - Authentication (properly implemented?)
   - Authorization (proper permission checks?)
   - Session management (secure, expiring?)
   - Cryptography (strong algorithms, proper usage?)
   - Error handling (no information leakage?)

2. PERFORMANCE ISSUES
   Database:
   - N+1 query problems
   - Missing database indexes
   - Inefficient queries (SELECT *, unnecessary joins)
   - Lack of query result caching
   - Database connection leaks

   Code:
   - Inefficient algorithms (O(n²) when O(n) possible)
   - Unnecessary computations in loops
   - Synchronous operations that could be async
   - Memory leaks (unclosed resources)
   - Large payload sizes
   - Blocking operations on hot path

   Architecture:
   - Missing caching opportunities
   - Synchronous where async would help
   - No pagination for large datasets

3. EDGE CASES & BUGS
   - Null/undefined handling
   - Empty array/string handling
   - Boundary conditions (0, -1, MAX_INT, etc.)
   - Race conditions (concurrent access)
   - Integer overflow/underflow
   - Timezone and encoding issues
   - Division by zero
   - Off-by-one errors
   - Invalid state transitions
   - Error handling gaps (uncaught exceptions)

4. CODE QUALITY
   - High complexity (cyclomatic complexity > 10)
   - Tight coupling (hard to change/test)
   - Code duplication (DRY violations)
   - Inconsistent patterns
   - Missing tests
   - Poor naming (unclear variables/functions)
   - Magic numbers/strings (use constants)
   - Long functions (>50 lines)
   - Too many parameters (>4)
   - Deeply nested logic (>3 levels)
   - Missing error handling
   - Lack of logging for important operations

5. SCALABILITY CONCERNS
   - Resource exhaustion (memory, connections, file handles)
   - Unbounded growth (arrays, caches never cleared)
   - Single points of failure
   - Bottlenecks (serial when could be parallel)
   - State management (shared mutable state)
   - Concurrency issues (thread safety)
   - Lack of rate limiting
   - Missing circuit breakers for external services

Be specific with:
- Exact line numbers where issues occur
- Code snippets showing the problem
- Concrete examples of how to exploit/trigger
- Suggested fixes with code examples

Prioritize findings by severity:
- CRITICAL: Security vulnerabilities that could lead to data breaches, data loss, or system compromise
- HIGH: Bugs that break functionality, performance issues that degrade UX, missing critical validations
- MEDIUM: Code quality issues affecting maintainability, minor bugs, suboptimal patterns
- LOW: Style inconsistencies, minor optimizations, documentation improvements

DO NOT:
- Just say "looks good" or "no issues found"
- Be vague ("security could be better")
- Focus only on style/formatting

DO:
- Assume attackers will try to exploit this code
- Assume this will scale to 10x current load
- Find real, specific issues
- Provide actionable feedback
- Be thorough and critical

Format your response as:

## CRITICAL ISSUES
[List with line numbers, explanation, impact, and fix]

## HIGH PRIORITY ISSUES
[List with line numbers, explanation, impact, and fix]

## MEDIUM PRIORITY ISSUES
[List with line numbers and suggested improvements]

## LOW PRIORITY ISSUES
[List with brief suggestions]

## SUGGESTED REFACTOR
[Optional: If major refactoring would help, provide example]
```

**Use this for:** Adversarial code review (always use for production code!)

---

## HOW TO USE THESE TEMPLATES

1. **Copy the template** that matches your task
2. **Fill in the bracketed fields** [like this] with specifics
3. **Customize** based on your project context
4. **Paste into Claude Code** and let it work
5. **Review** the output with adversarial review template (#9)

## TIPS FOR BEST RESULTS

- **Be specific:** More details = better code
- **Include context:** Reference existing files and patterns
- **Set success criteria:** Define what "done" looks like
- **Use examples:** Show expected input/output
- **Iterate:** If first result isn't perfect, refine and retry

## REMEMBER

**Good prompts = Good code**

Time spent on clear requirements is time saved in iterations.

---

**Last Updated:** 2026-01-05
**Version:** 1.0
**Cienty Engineering Team**

---

## PRINTING INSTRUCTIONS

**Format:** A4 or Letter size
**Pages:** 2
**Orientation:** Portrait
**Print:** Double-sided (flip on long edge)
**Paper:** Standard (24lb) or heavy stock
**Color:** Black & white acceptable, color preferred
**Distribution:** 1 per workshop attendee
**Digital:** Provide PDF for copy-paste convenience

---
