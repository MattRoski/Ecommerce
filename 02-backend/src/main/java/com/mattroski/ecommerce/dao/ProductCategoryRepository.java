package com.mattroski.ecommerce.dao;

import com.mattroski.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
//productCategory - name of JSON entry.....product-category - /product-category path
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
