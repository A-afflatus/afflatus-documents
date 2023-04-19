public class LockInfo {
    private String lockKey;
    private long leaseTime;
    private long timeout;
    private TimeUnit unit;

    public static LockInfoBuilder builder() {
        return new LockInfoBuilder();
    }
    //省略getter setter 和构造函数

    public static class LockInfoBuilder {
        private String lockKey;
        private long leaseTime;
        private long timeout;
        private TimeUnit unit;

        LockInfoBuilder() {
        }

        public LockInfoBuilder lockKey(final String lockKey) {
            this.lockKey = lockKey;
            return this;
        }

        public LockInfoBuilder leaseTime(final long leaseTime) {
            this.leaseTime = leaseTime;
            return this;
        }

        public LockInfoBuilder timeout(final long timeout) {
            this.timeout = timeout;
            return this;
        }

        public LockInfoBuilder unit(final TimeUnit unit) {
            this.unit = unit;
            return this;
        }

        public LockInfo build() {
            return new LockInfo(this.lockKey, this.leaseTime, this.timeout, this.unit);
        }
    }
}