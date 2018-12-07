package com.puter.rest.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.Database;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Properties;

//@Configuration
//@EnableJpaRepositories(basePackages = "com.puter.rest.repository")
//@EntityScan({"com.puter.rest.entity"})
//@ComponentScan({"com.puter.rest"})
//@EnableTransactionManagement
public class DbConfig {
//    @Bean(name = "dataSource")
//    public DataSource localDataSource() {
//        return DataSourceBuilder
//                .create()
//                .url("jdbc:oracle:thin:@rosb-06.vm.cmx.ru:1521:rosb")
//                .username("REACT_MESS")
//                .password("REACT_MESS")
//                .driverClassName("oracle.jdbc.OracleDriver")
//                .build();
//    }
//
//    @Bean
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource) {
//        LocalContainerEntityManagerFactoryBean lcemfb = new LocalContainerEntityManagerFactoryBean();
//        lcemfb.setDataSource(dataSource);
//        lcemfb.setPackagesToScan("com.puter.rest.entity");
//        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
//        vendorAdapter.setDatabase(Database.ORACLE);
//        vendorAdapter.setShowSql(true);
//        lcemfb.setJpaVendorAdapter(vendorAdapter);
//        lcemfb.setJpaProperties(additionalProperties());
//        return lcemfb;
//    }
//
//    @Bean
//    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
//        JpaTransactionManager transactionManager = new JpaTransactionManager();
//        transactionManager.setEntityManagerFactory(emf);
//        return transactionManager;
//    }
//
//    private Properties additionalProperties() {
//        Properties properties = new Properties();
//        properties.setProperty("hibernate.globally_quoted_identifiers", "true");
//        properties.setProperty("hibernate.hbm2ddl.auto", "validate");
//        properties.setProperty("hibernate.dialect", "org.hibernate.dialect.Oracle12cDialect");
//        properties.setProperty("hibernate.show_sql", "false");
//        properties.setProperty("spring.jpa.hibernate.use-new-id-generator-mappings", "false");
//        properties.setProperty("spring.jpa.properties.hibernate.enable_lazy_load_no_trans", "true");
//        return properties;
//    }

}
